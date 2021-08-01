import axios from 'axios';
import React,{Component} from 'react';
import Button from "@material-ui/core/Button";
class Upload extends Component {
  
    state = {
      selectedFile: null
    };
    onFileChange = event => {
      this.setState({ selectedFile: event.target.files[0] });
    
    };
    onFileUpload = () => {
      const formData = new FormData();
      formData.append(
        "myFile",
        this.state.selectedFile,
        this.state.selectedFile.name
      );
      console.log(this.state.selectedFile);
      axios.post("api/uploadfile", formData);
    };
    fileData = () => {
    
      if (this.state.selectedFile) {
         
        return (
          <div>
            <h2>File Details:</h2>
             
            <p>File Name: {this.state.selectedFile.name}</p>
   
            <p>File Type: {this.state.selectedFile.type}</p>
 
             
            <p>
              Last Modified:{" "}
              {this.state.selectedFile.lastModifiedDate.toDateString()}
            </p>
 
          </div>
        );
      } 
    };
    
    render() {
    
      return (
        <div>
            <div>
                <input type="file" onChange={this.onFileChange} />
                <Button
                variant="contained"
                color="primary"
                onClick={this.onFileUpload}>
                  Upload!
                </Button>
            </div>
          {this.fileData()}
        </div>
      );
    }
  }
 
  export default Upload;