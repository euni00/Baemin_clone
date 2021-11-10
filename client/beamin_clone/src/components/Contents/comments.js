function warnEmpty() {
  alert("빈칸입니다.");
}
function dateToString(date) {
  const dateString = date.toISOString();
  const dateToString =
    dateString.substring(0, 10) + " " + dateString.substring(11, 19);
  return dateToString;
}
function submitComment() {
  const newcommentEL = document.getElementById("new-comment");
  console.log(newcommentEL);
  const newcomment = newcommentEL.value.trim();

  if (newcomment) {
    const dateEL = document.createElement("div");
    dateEL.classList.add("comment-date");
    const dateString = dateToString(new Date());
    dateEL.innerText = dateString;

    const contentEL = document.createElement("div");
    contentEL.classList.add("comment-content");
    contentEL.innerText = newcomment;

    const commentEL = document.createElement("div");
    commentEL.classList.add("comment-row");
    commentEL.appendChild(dateEL);
    commentEL.appendChild(contentEL);

    // 댓글 추가
    document.getElementById("comments").appendChild(commentEL);
    newcomment.value = "";

    const countEL = document.getElementById("comments-count");
    // const count = countEL.innerText;
    countEL.innerText = parseInt(countEL.innerText) + 1;
  } else warnEmpty();
}
