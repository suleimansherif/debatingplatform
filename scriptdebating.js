// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic validation
    if (username.trim() === '' || password.trim() === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Simulate login success
    alert(`Welcome, ${username}!`);

    // Hide login form and show main content
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('mainContent').style.display = 'block';
});

// Logout functionality
document.getElementById('logoutButton').addEventListener('click', function () {
    // Hide main content and show login form
    document.getElementById('mainContent').style.display = 'none';
    document.getElementById('loginContainer').style.display = 'block';
});

// Toggle dropdown menu
function toggleDropdown() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
}

// Function to show the Privacy Policy modal
function showPrivacyModal() {
    document.getElementById('privacy-policy-modal').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

// Function to close the Privacy Policy modal
function closePrivacyModal() {
    document.getElementById('privacy-policy-modal').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

// JavaScript for Video Upload and Display
function uploadVideo() {
    const fileInput = document.getElementById('video-upload');
    const videoList = document.getElementById('video-list');

    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const videoURL = URL.createObjectURL(file);

        // Create a new video element
        const videoElement = document.createElement('video');
        videoElement.src = videoURL; // Fixed variable name from `mylogoURL` to `videoURL`
        videoElement.controls = true;
        videoElement.style.width = '100%';
        videoElement.style.marginTop = '10px';

        // Append the video to the video list
        videoList.appendChild(videoElement);

        alert('Video uploaded successfully!');
    } else {
        alert('Please select a video file to upload.');
    }
}

// Comment and Social Interaction Functionality
document.addEventListener('DOMContentLoaded', function () {
    const commentInput = document.getElementById('comment-input');
    const submitCommentButton = document.getElementById('submit-comment');
    const commentsContainer = document.getElementById('comments');
    const likeButton = document.getElementById('like-button');
    const shareButton = document.getElementById('share-button');
    const tweetButton = document.getElementById('tweet-button');

    // Submit Comment
    submitCommentButton.addEventListener('click', function () {
        const commentText = commentInput.value.trim();
        if (commentText) {
            const commentElement = document.createElement('div');
            commentElement.textContent = commentText;
            commentsContainer.appendChild(commentElement);
            commentInput.value = '';
        }
    });

    // Like Button
    likeButton.addEventListener('click', function () {
        alert('You liked this video!');
        // You can add more functionality here, like updating a like counter.
    });

    // Share Button
    shareButton.addEventListener('click', function () {
        const videoUrl = window.location.href;
        navigator.clipboard.writeText(videoUrl).then(() => {
            alert('Link copied to clipboard!');
        });
    });

    // Tweet Button (Commented out for now)
    /*
    tweetButton.addEventListener('click', function () {
        const videoUrl = window.location.href;
        const tweetText = `Check out this video: ${videoUrl}`;
        const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
        window.open(tweetUrl, '_blank');
    });
    */
});