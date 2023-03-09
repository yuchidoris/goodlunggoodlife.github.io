Rewrite the combine function
function combine() {
  // get the selected frame image filename
  const selectedFrame = document.querySelector('input[name="frame"]:checked').value;

  // load the selected frame image
  const frameImage = new Image();
  frameImage.onload = function() {
    // get the user image element and load the chosen image
    const userImageInput = document.getElementById('user-image');
    const userImage = new Image();
    userImage.onload = function() {
      // combine the images and provide a download link
      combineImagesWithFrame(frameImage, userImage, 'combined.png');
    };