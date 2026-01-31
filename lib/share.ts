export function share(text: string) {
  if (navigator.share) {
    navigator.share({
      title: "MiddleClassFinance",
      text,
      url: window.location.href,
    })
  } else {
    navigator.clipboard.writeText(
      text + " " + window.location.href
    )
    alert("Link copied!")
  }
}
