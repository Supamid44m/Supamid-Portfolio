export function getCurrentDate() {
    const date = new Date()
  return date
}

export function getCurrentYear() {
  return new Date().getUTCFullYear();
}

export function getAge(birthdate: string) {
  const birth = new Date(birthdate);
  const today = new Date();

  let age = today.getFullYear() - birth.getFullYear();
  const hasHadBirthdayThisYear =
    today.getMonth() > birth.getMonth() ||
    (today.getMonth() === birth.getMonth() && today.getDate() >= birth.getDate());

  if (!hasHadBirthdayThisYear) {
    age -= 1;
  }

  return age;
}
