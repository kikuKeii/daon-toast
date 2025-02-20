# Daon Toast Documentation

## Introduction
**Daon Toast** is a lightweight notification library that allows you to display toast notifications with various configurations such as position, duration, and delay.

---

## Initializing Daon Toast
Before using **Daon Toast**, you need to initialize it using the `initDaon()` function. This function accepts a configuration object with several optional parameters.

### Initialization Example
```javascript
initDaon({
    avatar: "https://kiki.my.id/assets/img/hero2.jpg", // URL of the avatar image in the notification
    title: "Success", // Default toast title
    message: "Successfully logged in", // Default toast message
    time: 5000, // Toast duration in milliseconds
    startAt: 0, // Time delay before the toast appears in milliseconds (0 means immediate)
    position: "bottom-end" // Toast position (options: top-start, top-end, bottom-start, bottom-end)
});
```

---

## Running Daon Toast
After initialization, you can trigger a toast using the `daonGo()` function.

### Usage Examples

#### 1. Running Toast Immediately
```javascript
daonGo({
    title: "Kikukeii",
    message: "Daon Toast running successfully",
});
```

#### 2. Running Toast with a 5-Second Delay
```javascript
daonGo({
    title: "Kikukeii",
    message: "Run Daon Toast in 5 seconds",
    startAt: 5000, // Toast appears after 5 seconds
});
```

#### 3. Running Toast with a 10-Second Duration
```javascript
daonGo({
    title: "Kikukeii",
    message: "Run Daon Toast 10 seconds delay",
    time: 10000, // Toast will be displayed for 10 seconds
});
```

#### 4. Running Toast on Button Click
```javascript
$('button').click(function () {
    daonGo({
        title: "Kikukeii",
        message: "Daon Toast running by click",
    });
});
```

---

## Parameters
The following parameters can be used in `initDaon()` and `daonGo()`:

| Parameter | Type | Description |
|-----------|------|-------------|
| `avatar` | `string` | URL of the avatar image in the toast |
| `title` | `string` | Toast title |
| `message` | `string` | Message displayed in the toast |
| `time` | `number` | Toast duration in milliseconds (default: 5000) |
| `startAt` | `number` | Delay before the toast appears in milliseconds (default: 0) |
| `position` | `string` | Toast position on the screen (options: `top-start`, `top-end`, `bottom-start`, `bottom-end`) |

---

## Conclusion
**Daon Toast** is a lightweight library that simplifies notification management in web applications. With flexibility in timing, positioning, and event triggers, Daon Toast is well-suited for various user interface notification needs.