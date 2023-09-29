const videoElement = document.getElementById('video');
const button = document.getElementById('button');
// Prompt the user to select 
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDeviecs.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
   
    console.log('Whoops, error in selectMediaStream: ', error);
  }
}

button.addEventListener('click', async () => {
  button.disabled = true;
  await videoElement.requestPictureInPicture();
  button.disabled = false;
});

selectMediaStream();