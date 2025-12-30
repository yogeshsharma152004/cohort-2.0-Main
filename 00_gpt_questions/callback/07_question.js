// Nested callbacks se yeh steps banao:

// Select file

// Upload file

// Process file

// Save file

// Har step me 1 sec delay

function selectFile(filename, cb) {
  console.log("Selecting File ...");

  setTimeout(() => {
    cb({ name: filename });
  }, 1000);
}

function UploadFile(filename, cb) {
  setTimeout(() => {
    console.log("uploading File...");

    cb({ ...filename, status: "Uploaded" });
  }, 2000);
}
function processFile(filename, cb) {
  setTimeout(() => {
    console.log("File Processing...");

    cb({ ...filename, status: "Processed" });
  }, 3000);
}
function saveFile(filename, cb) {
  setTimeout(() => {
    console.log("File saving...");

    cb({ ...filename, status: "saved" });
  }, 4000);
}

selectFile("Atomic habits", (files) => {console.log(files);
  UploadFile(files, (uploadedFile) => {console.log(uploadedFile);
    processFile(uploadedFile, (processedFile) => {console.log(processedFile);
      saveFile(processedFile, (savedFile) => {;
        console.log(savedFile);
        console.log("Process Compelted ✅");
      });
    });
  });
});
