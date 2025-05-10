function getUserInitials(user: { displayName?: string; email?: string }) {
  if (user.displayName) {
    const names = user.displayName.trim().split(" ");
    if (names.length === 1) return names[0][0].toUpperCase();
    return (names[0][0] + names[names.length - 1][0]).toUpperCase();
  }
  if (user.email) return user.email[0].toUpperCase();
  return "?";
}
export default getUserInitials;
