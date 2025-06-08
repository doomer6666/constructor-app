export async function logOut() {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    window.location.href = '/';
}