import React, { Component } from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';
import AllImages from './AllImages';
import AddImage from '../AddImage';

const propTypes = {
  aImages: PropTypes.array.isRequired,
  save: PropTypes.func.isRequired
};
class EditImageSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image1: '',
      image2: '',
      image3: '',
      addedImage: []
    };
  }

  changeImage1 = val => {
    this.setState({ image1: val });
  };

  changeImage2 = val => {
    this.setState({ image2: val });
  };

  changeImage3 = val => {
    this.setState({ image3: val });
  };

  submitImage = () => {
    const formData = new FormData();
    formData.append('file', this.state.addedImage[0]);
    axios
      .post(`/api/addImage`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(() => {
        this.setState({ addedImage: [] });
      });
  };

  added = image => {
    let newA = this.state.addedImage.slice();
    newA.push(...image);
    this.setState({ addedImage: newA });
  };

  displayImage = () => {
    function getOrientation(file, callback) {
      var reader = new FileReader();
      reader.onload = function(e) {
        var view = new DataView(e.target.result);
        if (view.getUint16(0, false) != 0xffd8) {
          return callback(-2);
        }
        var length = view.byteLength,
          offset = 2;
        while (offset < length) {
          if (view.getUint16(offset + 2, false) <= 8) return callback(-1);
          var marker = view.getUint16(offset, false);
          offset += 2;
          if (marker == 0xffe1) {
            if (view.getUint32((offset += 2), false) != 0x45786966) {
              return callback(-1);
            }

            var little = view.getUint16((offset += 6), false) == 0x4949;
            offset += view.getUint32(offset + 4, little);
            var tags = view.getUint16(offset, little);
            offset += 2;
            for (var i = 0; i < tags; i++) {
              if (view.getUint16(offset + i * 12, little) == 0x0112) {
                return callback(view.getUint16(offset + i * 12 + 8, little));
              }
            }
          } else if ((marker & 0xff00) != 0xff00) {
            break;
          } else {
            offset += view.getUint16(offset, false);
          }
        }
        return callback(-1);
      };
      reader.readAsArrayBuffer(file);
    }

    getOrientation(this.state.addedImage[0], orientation => {
      console.log(orientation);
    });
  };

  showImage = (srcBase64, srcOrientation, callback) => {
    var img = new Image();

    img.onload = function() {
      var width = img.width,
        height = img.height,
        canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d');

      // set proper canvas dimensions before transform & export
      if (4 < srcOrientation && srcOrientation < 9) {
        canvas.width = height;
        canvas.height = width;
      } else {
        canvas.width = width;
        canvas.height = height;
      }

      // transform context before drawing image
      switch (srcOrientation) {
        case 2:
          ctx.transform(-1, 0, 0, 1, width, 0);
          break;
        case 3:
          ctx.transform(-1, 0, 0, -1, width, height);
          break;
        case 4:
          ctx.transform(1, 0, 0, -1, 0, height);
          break;
        case 5:
          ctx.transform(0, 1, 1, 0, 0, 0);
          break;
        case 6:
          ctx.transform(0, 1, -1, 0, height, 0);
          break;
        case 7:
          ctx.transform(0, -1, -1, 0, height, width);
          break;
        case 8:
          ctx.transform(0, -1, 1, 0, 0, width);
          break;
        default:
          break;
      }

      // draw image
      ctx.drawImage(img, 0, 0);

      // export base64
      callback(canvas.toDataURL());
    };

    img.src = srcBase64;
  };

  render() {
    console.log(this.state);
    const allImages = this.props.aImages.map(image => {
      return <AllImages key={image.id} url={image.url} />;
    });

    let showAdded = [];
    if (this.state.addedImage.length >= 1) {
      showAdded = this.state.addedImage.map(e => {
        // return <AddImage key={e.name} added={this.state.addedImages} image={e.preview} />;
        return this.displayImage();
      });
    }

    return (
      <div className="editimage">
        <Dropzone
          accept="image/*"
          onDrop={image => {
            this.added(image);
          }}
        >
          <p>Add file</p>
        </Dropzone>
        {showAdded}
        {this.state.addedImage && this.state.addedImage.length > 1 ? <button>Save Images</button> : <button>Save Image</button>}
        <p>Change Image 1</p>
        <input onChange={e => this.changeImage1(e.target.value)} />
        <p>Change Image 2</p>
        <input onChange={e => this.changeImage2(e.target.value)} />
        <p>Change Image 3</p>
        <input onChange={e => this.changeImage3(e.target.value)} />
        <div className="editimage_allImages">{allImages}</div>
      </div>
    );
  }
}

export default EditImageSlider;
