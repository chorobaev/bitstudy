export function formatSeconds(sec) {
    let min = Math.floor(sec / 60);
    sec %= 60;
    let time = "";
    time += min.toString().length < 2 ? `0${min}:` : `${min}:`;
    time += sec.toString().length < 2 ? `0${sec}` : sec.toString();
    return time;
}