// Mock user data
const mockUser = {
    username: "Pooja",
    friends: ["Gayatri", "Shridhar", "Vighnesh"],
    posts: [
        { platform: "Facebook", content: "Had a great day at the beach!" },
        { platform: "Twitter", content: "Just finished coding a new project! #excited" },
        { platform: "Instagram", content: "Loving the sunset view! #Nature" },
    ]
};

// Select DOM elements
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const userSection = document.getElementById('user-section');
const loginSection = document.getElementById('login-section');
const usernameSpan = document.getElementById('username');
const friendsList = document.getElementById('friends-list');
const postsContainer = document.getElementById('posts-container');
const connectFriendBtn = document.getElementById('connect-friend-btn');

// Simulate login
loginBtn.addEventListener('click', () => {
    loginSection.style.display = 'none';
    userSection.style.display = 'block';

    // Set username
    usernameSpan.textContent = mockUser.username;

    // Display friends
    mockUser.friends.forEach(friend => {
        const li = document.createElement('li');
        li.textContent = friend;
        friendsList.appendChild(li);
    });

    // Display posts
    mockUser.posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `<strong>${post.platform}</strong>: ${post.content}`;
        postsContainer.appendChild(postDiv);
    });
});

// Simulate logout
logoutBtn.addEventListener('click', () => {
    userSection.style.display = 'none';
    loginSection.style.display = 'block';
});

// Simulate connecting with a new friend
connectFriendBtn.addEventListener('click', () => {
    const newFriend = prompt("Enter your friend's name:");
    if (newFriend) {
        mockUser.friends.push(newFriend);
        const li = document.createElement('li');
        li.textContent = newFriend;
        friendsList.appendChild(li);
    }
});
