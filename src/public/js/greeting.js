const updateGreeting = hours => {
  if (hours >= 6 && hours < 12) {
    const greeting = `Good morning, ${getUsername()}.`
    greetingH1.innerText = greeting
    return
  }

  if (hours >= 12 && hours < 18) {
    const greeting = `Good afternoon, ${getUsername()}.`
    greetingH1.innerText = greeting
    return
  }

  if (hours >= 18 || hours < 6) {
    const greeting = `Good night, ${getUsername()}.`
    greetingH1.innerText = greeting
    return
  }
}
