if (typeof bootstrap === "undefined") {
  console.error("Bootstrap 5 is required");
}
if (typeof jQuery === "undefined") {
  console.error("jQuery is required");
}

let daonToast = {};
let defaultAvatar =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC+0lEQVR4nO2Zy2/MURzFP208mth41aO0iUhKrIiw0EjEQmmxqREiYcHGQiqiHRYSmmZssKAL/AEWHiUSVuqxq0iIeISVhCaqlagp9ShGbnJ+yTUxM/fOdGbuYk5yF5Oc8/t9T+/93e+jUEEFFeSLzUAf8AVIlXmNKpZWXxPdAQSfyrC6fHbCCH4AnUAd5UcdEFdMJrYWF9FdkY0wNMQV2x0X8qjI8wkP8xRb0oUcncVQkXKNr1AjtcBB4DYwAHzXzfcK6AEaCnh2SYxUAR0O1/UwsBGYnMc7SmLkonS/gOvANmAZME1rJXDVev47IBaakd3SjADNWXjGUAJ4LP4fYHtIRl5Ls89Dc1SaQWBqCEaWiv8BqPb8pp5Lm20XS2Zkj/iX8MdpaY+EYOSQ+CYoXxyQ9lwIRuLim0LTF+0hGdkr/nn8cVLaYyEYaRb/Fv64Ie2OEIzMtm4tH5gb7qO09SEYmaRq1GgWeehWSPPeQ1NUIzvFfwYs8DQyJO3yEIy0i38Wf1yRNhaCkXXiP/Us0ecAb6U1u+OKohkxH22/NJ9VeuRCjQpGo3ng8a6iF43TgTfSNTrwV4lrmq2ZofUjF6Q77jFuOpPHe1LFNtIk3ScNCTJhrpU/1oTas9+U9kUWTvQ9mbEToRqpl/ZrFs6IOItDNlIr7bcsnCgJGm6wRhZak5JMGBDHpwoouZGopH/p0N/vCtFIjXqKaMi8Pwu3Q5wxNWVTQjDSoOZo2NKdcqgEeqzMPqi84lrKT6gRk5mvaRgX8R8BG3DHeuCJpTfP6gVWT0B8OYmN6gQjzk/gMrCW/NGkCUx0LKNuc0ke8TkRYzrXKTVSiRwZ3Bcm43dbTdpYhilkQUa2WMeoV+1tsTDLmhH/BrY6xPdfJNMS1gwriSUcy/RCUWUVlkOKIephonYhJ/pEPpx2Xd73HIkWimrgXlosnT7/emsVeVz3/EP9bqP0aNO7+zVWHdfvTa4P6LLOYmjrhO9fo0VbGH0z5VxJxeK8ExVUUAH/4C/8QeTzQ8imiAAAAABJRU5ErkJggg==";

const initDaon = (data) => {
  daonToast = {
    avatar: data.avatar || defaultAvatar,
    title: data.title || "Title not set",
    message: data.message || "Message not set",
    time: data.time || 5000,
    startAt: data.startAt || 0,
    position: data.position || "bottom-end",
  };

  let setPosition;
  switch (daonToast.position) {
    case "top-start":
      setPosition = "top-0 start-0";
      break;
    case "top-center":
      setPosition = "top-0 start-50 translate-middle-x";
      break;
    case "top-end":
      setPosition = "top-0 end-0";
      break;
    case "middle-start":
      setPosition = "top-50 start-0 translate-middle-y";
      break;
    case "middle-center":
      setPosition = "top-50 start-50 translate-middle";
      break;
    case "middle-end":
      setPosition = "top-50 end-0 translate-middle-y";
      break;
    case "bottom-start":
      setPosition = "bottom-0 start-0";
      break;
    case "bottom-center":
      setPosition = "bottom-0 start-50 translate-middle-x";
      break;
    case "bottom-end":
      setPosition = "bottom-0 end-0";
      break;
  }
  $("body").append(`
    <!-- start toast container -->
    <div id="daonToast-container" class="toast-container position-fixed ${setPosition} p-3" style="z-index: 2000;">
    </div>
    <!-- end toast container -->`);
};

const daonGo = (data) => {
  if (data === undefined) {
    console.error(
      "Please initialize daonToast first or pass an object as parameter"
    );
    return;
  }
  let avatar = data.avatar || daonToast.avatar;
  let title = data.title || daonToast.title;
  let message = data.message || daonToast.message;
  let startAt = data.startAt || daonToast.startAt;
  let time = data.time || daonToast.time;

  let interval_startAt = setInterval(() => {
    let randomString = Math.random().toString(36).substring(2, 15);
    let data = { title, message, time, randomString };

    $("#daonToast-container").append(`
        <div id="toast-${data.randomString}" class="toast" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay=${data.time}>
            <div class="toast-header">
            <img src="${avatar}" class="rounded me-2" alt="Avatar" width="25" />
            <strong class="me-auto">${data.title}</strong>
            <small id="toast-time-${data.randomString}">Just now</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">${data.message}</div>
        </div>`);

    $(`#toast-${data.randomString}`).toast("show");
    countTime(`#toast-time-${data.randomString}`, data.time);

    setTimeout(() => {
      $(`#toast-${data.randomString}`).remove();
    }, data.time);

    clearInterval(interval_startAt);
  }, startAt);
};

function countTime(e, time) {
  let startTime = new Date().getTime();
  let endTime = startTime - time;

  $(e).html(timeToString(startTime - endTime));

  let f_interval = setInterval(() => {
    let currentTime = new Date().getTime();
    let elapsedTime = currentTime - startTime;

    $(e).html(timeToString(elapsedTime));

    if (elapsedTime >= time) {
      clearInterval(f_interval);
    }
  }, 1000);
}

function timeToString(elapsedTime) {
  let minutes = Math.floor(elapsedTime / (1000 * 60)) % 60;
  let hours = Math.floor(elapsedTime / (1000 * 60 * 60)) % 24;
  let days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));

  if (days > 0) {
    return `${days} days ago`;
  }
  if (hours > 0) {
    return `${hours} hours ago`;
  }
  if (minutes > 0) {
    return `${minutes} minutes ago`;
  }
  return "Just now";
}
