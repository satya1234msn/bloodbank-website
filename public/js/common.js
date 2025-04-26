window.addEventListener('DOMContentLoaded', () => {
  const signinLink = document.getElementById('signinLink');
  const profileLink = document.getElementById('profileLink');
const userStr = localStorage.getItem('user');
const user = userStr ? JSON.parse(userStr) : null;


  if (user) {
    if (signinLink) signinLink.style.display = 'none';
    if (profileLink) profileLink.style.display = 'inline';

    const profileInfo = document.getElementById('profileInfo');
    if (profileInfo) {
      profileInfo.innerHTML = `
        <p><strong>Name:</strong> ${user.fullName}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Blood Type:</strong> ${user.bloodType}</p>
        <p><strong>Location:</strong> ${user.location}</p>
      `;
    }
  } else {
    if (profileLink) profileLink.style.display = 'none';
    if (window.location.pathname.includes('profile.html')) {
      window.location.href = 'signin.html';
    }
  }
});

function logout() {
  localStorage.removeItem('user');
  window.location.href = 'signin.html';
}
