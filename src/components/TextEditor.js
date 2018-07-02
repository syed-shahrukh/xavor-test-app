import React, { Component } from 'react';
import ReactSummernote from 'react-summernote';
import 'react-summernote/dist/react-summernote.css'; // import styles
 // you can import any other locale
 
// Import bootstrap(v3 or v4) dependencies
import 'bootstrap/dist/js/bootstrap.bundle';
 
class RichTextEditor extends Component {
  onChange(content) {
    console.log('onChange', content);
  }
 
  render() {
    return (
      <ReactSummernote
        value="Default value"
        options={{
          height: 350,
          dialogsInBody: true,
          toolbar: [
            ['style', ['style']],
            ['font', ['bold', 'underline', 'clear']],
            ['fontname', ['fontname']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['table', ['table']],
            ['insert', ['link', 'picture', 'video']],
            ['view', ['fullscreen', 'codeview']]
          ]
        
        }}
        onChange={this.onChange}
      />
    );
  }
}
 
export default RichTextEditor;