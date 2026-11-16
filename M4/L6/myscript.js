 function openZoo() {

      /* Task 1: Add your first animal to Zone 1 */
      document.getElementById("zone1").innerHTML = "Lion";

      /* Task 2: Add your second animal to Zone 2 */
      document.getElementById("zone2").innerHTML = "Elephant";

      /* Task 3: Add your third animal to Zone 3 */
      document.getElementById("zone3").innerHTML = "Penguin";

      /* Task 4: Show the total number of animals */
      document.getElementById("total").innerHTML = "3";

      /* Task 5: Change the zoo background colour */
      document.getElementById("zoo").style.backgroundColor = "lightgreen";

      /* Task 6: Use the document object to show the page title */
      document.getElementById("zoo-status").innerHTML = document.title + " is now open!";
 }
