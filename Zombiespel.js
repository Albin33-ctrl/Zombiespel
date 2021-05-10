<script src="https://koda.nu/simple.js">
  
  var zombies = [];
  
  zombies.push({x: random(totalWidth), 
               y: random(totalHeight), 
               speed: random(1,5)});
  
  zombies.push({x: random(totalWidth), 
               y: random(totalHeight), 
               speed: random(1,5)});
  
  zombies.push({x: random(totalWidth), 
               y: random(totalHeight), 
               speed: random(1,5)});
  
  zombies.push({x: random(totalWidth), 
               y: random(totalHeight), 
               speed: random(1,5)});
  
  var zombie = {x: random(totalWidth), 
               y: random(totalHeight), 
               speed: random(1,5)};
  function update()
  {
    clearScreen();
    
    picture(zombie.x, zombie.y, "http://spelprogrammering.nu/bilder/explosion.png")
  	picture(zombie.x, zombie.y, "http://spelprogrammering.nu/bilder/xwing.png")
    
    if (zombie.x < mouse.x)
      zombie.x += zombie.speed;
    else
      zombie.x -= zombie.speed;
    
    if (zombie.y < mouse.y)
      zombie.y += zombie.speed;
    else
      zombie.y -= zombie.speed;
    
    if (distance(mouse, zombie) < 5)
    {
      alert("Too slow");
      stopUpdate(); 
    {
      	alert("you are shit");
      	stopUpdate();
      }
    }
  }

</script>