function searchCosmetics() {
    var input = document.getElementById("search-input").value;
    var resultsDiv = document.getElementById("search-results");
    resultsDiv.innerHTML = "";
    
    if (input.length > 0) {
      var products = [
        {"name": "Тушь для ресниц", "price": 500},
        {"name": "Пудра", "price": 700},
        {"name": "Тени для век", "price": 600}
      ];
      
      var resultCount = input.length;
      var countElement = document.createElement("span");
      countElement.className = "result-count";
      countElement.textContent = "(" + resultCount + ")";
      
      resultsDiv.appendChild(countElement);
      
      for (var i = 0; i < products.length; i++) {
        var product = products[i];
        if (product.name.toLowerCase().includes(input.toLowerCase())) {
          var item = document.createElement("div");
          item.className = "result-item";
          item.textContent = product.name;
          resultsDiv.appendChild(item);
        }
      }
    }
  }