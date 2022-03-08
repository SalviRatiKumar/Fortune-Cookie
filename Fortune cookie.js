const fortuneText = ["Mix a little foolishness with your serious plans. It is lovely to be silly at the right moment", "Old men can make war, but it is children who will make history", "Integrity is doing the right thing even when no one is watching", "If you see someone without a smile, give them one of yours", "Pretty much all the honest truth telling there is in the world is done by children", "Children see magic because they look for it"];
const cookie = document.getElementById("cookie");
const text = document.getElementById("text");

cookie.onclick = () => {
    let i = Math.floor(Math.random() * fortuneText.length);
    text.innerHTML = fortuneText[i];
}