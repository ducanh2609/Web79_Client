import { useState } from "react";

function Upload() {
  const [src, setSrc] = useState("");
  function handleChange(e) {
    console.log(e);
    const files = e.target.files;
    const file = files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = function () {
      const url = fileReader.result;
      setSrc(url);
    };
  }
  return (
    <div>
      <form
        action="http://localhost:8080/upload/666ebe7c4c399755141f3a7a"
        encType="multipart/form-data"
        method="POST"
      >
        <input type="file" name="image" onChange={handleChange} />
        <div>
          <img src={src} alt="" width="500" />
        </div>
        <input type="submit" value="Upload a file" />
      </form>

      <form
        action="http://localhost:8080/uploadmultiple/666ebe7c4c399755141f3a7a"
        encType="multipart/form-data"
        method="POST"
      >
        Select images:
        <input type="file" name="images" multiple />
        <input type="submit" value="Upload your files" />
      </form>

      {/* <form action="/upload/photo" enctype="multipart/form-data" method="POST">
        <input type="file" name="myImage" accept="image/*" />
        <input type="submit" value="Upload Photo" />
      </form> */}
    </div>
  );
}

export default Upload;
