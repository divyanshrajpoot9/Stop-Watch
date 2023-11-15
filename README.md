# Stop-Watch
### Hosted Link : https://divyanshrajpoot9.github.io/Stop-Watch/
### Java Script DOM Manipulation:
The Document Object Model (DOM) is a programming interface for web documents. It provides a structured representation of a web page, allowing you to access and manipulate its elements and content using JavaScript. Here are some basic DOM properties and methods.
document: The document object represents the entire HTML document and serves as the entry point to the DOM. It provides properties and methods to access and modify the document's structure, content, and style.

### Element Selection and Traversal:

  ### getElementById(id): Retrieves an element by its unique id attribute.
  #### getElementsByClassName(className): Returns a collection of elements with a specific class name.
  ####  getElementsByTagName(tagName): Returns a collection of elements with a specific tag name.
  ####  querySelector(selector): Returns the first element that matches the CSS selector.
  ####  querySelectorAll(selector): Returns a list of all elements that match the CSS selector.
  
  #### This JavaScript code is a simple implementation of a timer with start, stop, and reset functionalities. 

1. **HTML Elements:**
   ```html
   <div>
     <span id="timer">00:00:00.00</span>
     <button id="startBtn">Start</button>
     <button id="stopBtn">Stop</button>
     <button id="resetBtn">Reset</button>
   </div>
   ```
   There are three buttons (`Start`, `Stop`, `Reset`) and a span element (`timer`) in the HTML. The JavaScript code interacts with these elements using their IDs.

2. **JavaScript Code:**
   ```javascript
   const timerTag = document.getElementById("timer");
   const startBtnTag = document.getElementById("startBtn");
   const stopBtnTag = document.getElementById("stopBtn");
   const resetBtnTag = document.getElementById("resetBtn");
   ```

   These lines fetch the HTML elements by their IDs and store them in variables for later use.

3. **Timer Variables:**
   ```javascript
   let intervalId;
   let startTime = 0;
   let watchTime = 0;
   ```
   - `intervalId`: Used to store the ID returned by `setInterval`, allowing us to later clear the interval.
   - `startTime`: Records the time when the timer starts.
   - `watchTime`: Represents the elapsed time since the timer started.

4. **`startTimer` Function:**
   ```javascript
   function startTimer() {
     startTime = Date.now() - watchTime;

     intervalId = setInterval(() => {
       watchTime = Date.now() - startTime;
       showTimeInFormate(watchTime);
     }, 10);
   }
   ```
   - `startTimer` is invoked when the "Start" button is clicked.
   - It calculates the `startTime` by subtracting the current `watchTime` from the current timestamp.
   - It sets up a timer that updates every 10 milliseconds (`setInterval`) and calls `showTimeInFormate` to display the formatted time.

5. **`showTimeInFormate` Function:**
   ```javascript
   function showTimeInFormate(watchTime) {
     let milisecond = watchTime % 100;
     let second = Math.floor(watchTime / 1000) % 60;
     let minimutes = Math.floor(Math.floor(watchTime / 1000) / 60) % 60;
     let hrs = Math.floor(Math.floor(Math.floor(watchTime / 1000) / 60) / 60);

     timerTag.textContent = hrs + ":" + minimutes + ":" + second + "." + milisecond;
   }
   ```
   - `showTimeInFormate` formats the `watchTime` into hours, minutes, seconds, and milliseconds and displays it in the `timerTag` element.

6. **`stopTimer` Function:**
   ```javascript
   function stopTimer() {
     clearInterval(intervalId);
   }
   ```
   - `stopTimer` is called when the "Stop" button is clicked.
   - It clears the interval using the `clearInterval` function, effectively stopping the timer.

7. **`resetTimer` Function:**
   ```javascript
   function resetTimer() {
     clearInterval(intervalId);
     startTime = 0;
     watchTime = 0;
     showTimeInFormate(watchTime);
     timerTag.innerText = "00:00:00";
   }
   ```
   - `resetTimer` is called when the "Reset" button is clicked.
   - It clears the interval, resets `startTime` and `watchTime` to zero, and updates the display in `timerTag` to "00:00:00".

8. **Event Listeners:**
   ```javascript
   startBtnTag.addEventListener("click", startTimer);
   stopBtnTag.addEventListener("click", stopTimer);
   resetBtnTag.addEventListener("click", resetTimer);
   ```
   - These lines set up event listeners on the respective buttons. When the buttons are clicked, the corresponding functions (`startTimer`, `stopTimer`, `resetTimer`) are executed.
