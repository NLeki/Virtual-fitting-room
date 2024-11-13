
// // Camera Access Functionality
// // Wrap the script inside DOMContentLoaded event listener
// document.addEventListener("DOMContentLoaded", function() {
//     const videoFeed = document.getElementById('video-feed');
//     const startButton = document.getElementById('startCamera');
//     const stopButton = document.getElementById('stopCamera');
//     let mediaStream;
  
//     // Function to start the camera
//     async function startCamera() {
//       try {
//         mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
  
//         videoFeed.srcObject = mediaStream;
//         startButton.disabled = true;
//         stopButton.disabled = false;
//       } catch (error) {
//         console.error('Error accessing camera:', error);
//       }
//     }
  
//     // Function to stop the camera
//     function stopCamera() {
//       if (mediaStream) {
//         const tracks = mediaStream.getTracks();
  
//         tracks.forEach((track) => {
//           track.stop();
//         });
  
//         videoFeed.srcObject = null;
//         startButton.disabled = false;
//         stopButton.disabled = true;
//       }
//     }
  
//     // Event listeners for buttons
//     startButton.addEventListener('click', startCamera);
//     stopButton.addEventListener('click', stopCamera);
//   });
  
  
//   // Body Detection
//   document.addEventListener("DOMContentLoaded", async function (){
//     const video = document.getElementById('video-feed');
//     const canvas = document.getElementById('canvas');
//     const ctx = canvas.getContext('2d');
  
//     let mediaStream = null;
  

//     const net = await posenet.load();
    
  
//     // Function to start body detection
//     async function startDetection() {
//       try {
//         mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
//         video.srcObject = mediaStream;
  
//         // Detect body on each frame
//         video.addEventListener('loadeddata', async function() {
//           canvas.width = video.videoWidth;
//           canvas.height = video.videoHeight;
//           setInterval(async () => {
//             // Detect poses
//             const pose = await net.estimateSinglePose(video, {
//               flipHorizontal: false
//             });
  
//             // Clear canvas
//             ctx.clearRect(0, 0, canvas.width, canvas.height);
  
//             // Draw detected poses
//             drawPose(pose, ctx);
//           }, 100);
//         });
//       } catch (error) {
//         console.error('Error accessing camera:', error);
//       }
//     }
  
//     // Function to draw the detected pose on canvas
//     function drawPose(pose, ctx) {
//       // Draw keypoints
//       pose.keypoints.forEach(keypoint => {
//         ctx.beginPath();
//         ctx.arc(keypoint.position.x, keypoint.position.y, 5, 0, 2 * Math.PI);
//         ctx.fillStyle = '#FF0000';
//         ctx.fill();
//       });
  
//       // Draw lines connecting keypoints
//       const adjacentKeyPoints = posenet.getAdjacentKeyPoints(pose.keypoints, 0.5);
//       adjacentKeyPoints.forEach(keypoints => {
//         drawSegment(ctx, keypoints[0].position, keypoints[1].position, '#FF0000');
//       });
//     }
  
//     // Function to draw line segments
//     function drawSegment(ctx, [ay, ax], [by, bx], color) {
//       ctx.beginPath();
//       ctx.moveTo(ax, ay);
//       ctx.lineTo(bx, by);
//       ctx.lineWidth = 2;
//       ctx.strokeStyle = color;
//       ctx.stroke();
//     }
  
//     // Start body detection when the page is loaded
//     startDetection();
//   });
//   // Function to overlay clothes onto the video feed
// function overlayClothes(clothingImageUrl, keypoint, ctx) {
//     const clothingImage = new Image();
//     clothingImage.src = clothingImageUrl;
    
//     clothingImage.onload = function() {
//         // Adjust position and size of clothing based on keypoint
//         const x = keypoint.position.x - (clothingImage.width / 2);
//         const y = keypoint.position.y - (clothingImage.height / 2);
        
//         // Draw the clothing onto the canvas
//         ctx.drawImage(clothingImage, x, y);
//     };
// }

// // Modify drawPose function to overlay clothes
// function drawPoseWithClothes(pose, ctx) {
//     // Draw keypoints
//     pose.keypoints.forEach(keypoint => {
//         ctx.beginPath();
//         ctx.arc(keypoint.position.x, keypoint.position.y, 5, 0, 2 * Math.PI);
//         ctx.fillStyle = '#FF0000';
//         ctx.fill();
//     });

//     // Overlay clothes on specific keypoints (e.g., upper body)
//     overlayClothes('path/to/clothing/image.png', pose.keypoints[5], ctx);
//     overlayClothes('path/to/clothing/image.png', pose.keypoints[6], ctx);
//     overlayClothes('path/to/clothing/image.png', pose.keypoints[9], ctx);
//     overlayClothes('path/to/clothing/image.png', pose.keypoints[10], ctx);

//     // Draw lines connecting keypoints
//     const adjacentKeyPoints = posenet.getAdjacentKeyPoints(pose.keypoints, 0.5);
//     adjacentKeyPoints.forEach(keypoints => {
//         drawSegment(ctx, keypoints[0].position, keypoints[1].position, '#FF0000');
//     });
// }
// //dress up live
// // Function to overlay clothes onto the video feed
// function overlayClothes(clothingImageUrl, keypoint, ctx) {
//     const clothingImage = new Image();
//     clothingImage.src = clothingImageUrl;
    
//     clothingImage.onload = function() {
//         // Adjust position and size of clothing based on keypoint
//         const x = keypoint.position.x - (clothingImage.width / 2);
//         const y = keypoint.position.y - (clothingImage.height / 2);
        
//         // Draw the clothing onto the canvas
//         ctx.drawImage(clothingImage, x, y);
//     };
// }

// // Modify drawPose function to overlay clothes
// function drawPoseWithClothes(pose, ctx) {
//     // Draw keypoints
//     pose.keypoints.forEach(keypoint => {
//         ctx.beginPath();
//         ctx.arc(keypoint.position.x, keypoint.position.y, 5, 0, 2 * Math.PI);
//         ctx.fillStyle = '#FF0000';
//         ctx.fill();
//     });

//     // Overlay clothes on specific keypoints (e.g., upper body)
//     overlayClothes('path/to/clothing/image.png', pose.keypoints[5], ctx);
//     overlayClothes('path/to/clothing/image.png', pose.keypoints[6], ctx);
//     overlayClothes('path/to/clothing/image.png', pose.keypoints[9], ctx);
//     overlayClothes('path/to/clothing/image.png', pose.keypoints[10], ctx);

//     // Draw lines connecting keypoints
//     const adjacentKeyPoints = posenet.getAdjacentKeyPoints(pose.keypoints, 0.5);
//     adjacentKeyPoints.forEach(keypoints => {
//         drawSegment(ctx, keypoints[0].position, keypoints[1].position, '#FF0000');
//     });
// }
// //dress up live
// // Function to overlay clothes onto the video feed
// function overlayClothes(clothingImageUrl, keypoint, ctx) {
//     const clothingImage = new Image();
//     clothingImage.src = clothingImageUrl;
    
//     clothingImage.onload = function() {
//         // Adjust position and size of clothing based on keypoint
//         const x = keypoint.position.x - (clothingImage.width / 2);
//         const y = keypoint.position.y - (clothingImage.height / 2);
        
//         // Draw the clothing onto the canvas
//         ctx.drawImage(clothingImage, x, y);
//     };
// }

// // Function to draw the detected pose on canvas
// function drawPose(pose, ctx, video) {
//   // Draw video frame onto the canvas
//   ctx.drawImage(video, 100, 100, canvas.width, canvas.height);


//   // Draw keypoints
//   pose.keypoints.forEach(keypoint => {
//       ctx.beginPath();
//       ctx.arc(keypoint.position.x, keypoint.position.y, 5, 0, 2 * Math.PI);
//       ctx.fillStyle = '#FF0000';
//       ctx.fill();
//   });

//   // Draw lines connecting keypoints
//   const adjacentKeyPoints = posenet.getAdjacentKeyPoints(pose.keypoints, 0.5);
//   adjacentKeyPoints.forEach(keypoints => {
//       drawSegment(ctx, keypoints[0].position, keypoints[1].position, '#FF0000');
//   });
// }

document.addEventListener("DOMContentLoaded", function() {
  // Mobile menu toggle
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
menu.addEventListener('click', function () {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

  // Product selection
const productCards = document.querySelectorAll('.product-card');
let selectedProduct = null;

productCards.forEach(productCard => {
  productCard.addEventListener('click', function () {
          // Get the selected product information (e.g., image URL)
    selectedProduct = {
      image: productCard.querySelector('img').src,
              // Add other product information if needed
    };

          // Call a function to start virtual fitting with the selected product
    startVirtualFitting();
  });
});

  // Virtual fitting
function startVirtualFitting() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  // Sample code for drawing the product image on the canvas
  if (selectedProduct) {
      const productImage = new Image();
      productImage.onload = function () {
          // Clear canvas
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          // Get the dimensions of the video feed
          const videoWidth = videoFeed.offsetWidth;
          const videoHeight = videoFeed.offsetHeight;

          // Calculate the scaling factor to adjust the product image size
          const scaleFactor = videoWidth / canvas.width;

          // Get the position of the camera feed within the canvas
          const cameraX = (canvas.width - videoWidth) / 2;
          const cameraY = (canvas.height - videoHeight) / 2;

          // Draw the camera feed
          ctx.drawImage(videoFeed, cameraX, cameraY, videoWidth, videoHeight);

          // Draw the product image centered on the canvas
          const productX = (canvas.width - productImage.width * scaleFactor) / 2;
          const productY = (canvas.height - productImage.height * scaleFactor) / 2;
          ctx.drawImage(productImage, productX, productY, productImage.width * scaleFactor, productImage.height * scaleFactor);
      };
      productImage.src = selectedProduct.image;
  }
}


  // Camera access functionality
const videoFeed = document.getElementById('video-feed');
const startButton = document.getElementById('startCamera');
const stopButton = document.getElementById('stopCamera');
let mediaStream;

async function startCamera() {
  try {
    mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });

    videoFeed.srcObject = mediaStream;
    startButton.disabled = true;
    stopButton.disabled = false;
  } catch (error) {
    console.error('Error accessing camera:', error);
  }
}

function stopCamera() {
  if (mediaStream) {
    const tracks = mediaStream.getTracks();

    tracks.forEach((track) => {
      track.stop();
    });

    videoFeed.srcObject = null;
    startButton.disabled = false;
    stopButton.disabled = true;
  }
}

startButton.addEventListener('click', startCamera);
stopButton.addEventListener('click', stopCamera);

  // Body detection
const video = document.getElementById('video-feed');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let net = null;

async function startDetection() {
  try {
    const poseNet = await posenet.load();
    net = poseNet;

    const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = mediaStream;

    video.addEventListener('loadeddata', async function () {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      setInterval(async () => {
        if (net) {
          const pose = await net.estimateSinglePose(video, {
            flipHorizontal: false
          });

          ctx.clearRect(0, 0, canvas.width, canvas.height);
          drawPose(pose, ctx);
        }
      }, 100);
    });
  } catch (error) {
    console.error('Error accessing camera:', error);
  }
}

function drawPose(pose, ctx) {
  pose.keypoints.forEach(keypoint => {
    ctx.beginPath();
    ctx.arc(keypoint.position.x, keypoint.position.y, 5, 0, 2 * Math.PI);
    ctx.fillStyle = '#FF0000';
    ctx.fill();
  });

  const adjacentKeyPoints = posenet.getAdjacentKeyPoints(pose.keypoints, 0.5);
  adjacentKeyPoints.forEach(keypoints => {
    drawSegment(ctx, keypoints[0].position, keypoints[1].position, '#FF0000');
  });
}

function drawSegment(ctx, [ay, ax], [by, bx], color) {
  ctx.beginPath();
  ctx.moveTo(ax, ay);
  ctx.lineTo(bx, by);
  ctx.lineWidth = 2;
  ctx.strokeStyle = color;
  ctx.stroke();
}

startDetection();
});


     //till here is camera code


    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.navbar__menu');
    menu.addEventListener('click', function (){
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    });

    //Bag section

// Placeholder function for processing payment

function processPayment() {
    // Check if a payment method is selected
    const selectedPaymentMethod = document.querySelector('input[name="paymentMethod"]:checked');

    if (selectedPaymentMethod) {
        // Display a message based on the selected payment method
        const paymentMethod = selectedPaymentMethod.value;
        alert(`Payment processing using ${paymentMethod}.`);
    } else {
        alert('Please select a payment method.');
    }
}

// Close the payment modal
function closePaymentModal() {
    document.getElementById('paymentModal').style.display = 'none';
}

// Event listener for closing the payment modal
document.querySelector('.close').addEventListener('click', closePaymentModal);







