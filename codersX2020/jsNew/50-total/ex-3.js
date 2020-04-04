// Viết hàm lấy extension của một file
// Example
// getExtensionFilename("abc.mp3") // "mp3"

function getExtensionFilename(filename) {
    return filename.split('.').pop();
}
console.log(getExtensionFilename('tài-liệu-quan-trọng.doc'))


//   'doc'  