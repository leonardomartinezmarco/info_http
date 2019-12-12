
// Limpar conteudo
    document.getElementById("limpar").onclick = function(event) {
        document.getElementById("p_conteudo").innerHTML = "";
    };

//Listar vários usuarios
    document.getElementById("listUsers").onclick = function(event) {
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("p_conteudo").innerHTML = ajax.responseText;
            }
        }
        ajax.open("GET", "https://reqres.in/api/users?=2", true);
        ajax.send();

    };


// Limpar conteudo 2
     document.getElementById("limpar2").onclick = function(event) {
        document.getElementById("p_conteudo2").innerHTML = "";
    };

//Listar unico usuario
    document.getElementById("listUser").onclick = function(event) {
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("p_conteudo2").innerHTML = ajax.responseText;
            }
        }
        ajax.open("GET", "https://reqres.in/api/users/2", true);
        ajax.send();
    };


// Limpar conteudo 3
    document.getElementById("limpar3").onclick = function() {
        document.getElementById("p_conteudo3").innerHTML = "";
    };

// Recurso Único não encontrado
    document.getElementById("userSumiu").onclick = function(event) {
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("p_conteudo3").innerHTML = ajax.responseText;
            } else if (this.readyState == 4 && this.status == 404) {
                status = this.status;
                document.getElementById("p_conteudo3").innerHTML = ajax.responseText + " Não encontrado, erro " + status;
            }
        }
        ajax.open("GET", "https://reqres.in/api/users/23", true);
        ajax.send();
    };


// Limpa conteudo 4
    document.getElementById("limpar4").onclick = function(event) {
         document.getElementById("p_conteudo4").innerHTML = "";
    };

// Listar Recurso
    document.getElementById("listRecurso").onclick = function() {
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("p_conteudo4").innerHTML = ajax.responseText;
            } else if (this.readyState == 4 && this.status == 404) {
                status = this.status;
                document.getElementById("p_conteudo4").innerHTML = ajax.responseText + " Não encontrado, erro " + status;
            }
        }
        ajax.open("GET", "https://reqres.in/api/unknown", true);
        ajax.send();
    };


// Limpar conteudo 5
    document.getElementById("limpar5").onclick = function(event) {
        document.getElementById("p_conteudo5").innerHTML = "";
    };

// Unico recurso
    document.getElementById("unicoRecurso").onclick = function() {
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("p_conteudo5").innerHTML = ajax.responseText;
            } else if (this.readyState == 4 && this.status == 404) {
                var status = this.status;
                document.getElementById("p_conteudo5").innerHTML = ajax.responseText + " Não encontrado, erro " + status;
            }
        }
        ajax.open("GET", "https://reqres.in/api/unknown/2", true);
        ajax.send();
    };
    

// Limpar conteudo 6
    document.getElementById("limpar6").onclick = function(event) {
        document.getElementById("p_conteudo6").innerHTML = "";
    };

// Recurso unico não encontrado
    document.getElementById("recursoUnicoSumiu").onclick = function() {
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("p_conteudo6").innerHTML = ajax.responseText;
            } else if (this.readyState == 4 && this.status == 404) {
                var status = this.status;
                document.getElementById("p_conteudo6").innerHTML = ajax.responseText + " Não encontrado, erro " + status;
            }
        }
        ajax.open("GET", "https://reqres.in/api/unknown/23", true);
        ajax.send();
    };


// Limpar conteudo 7
    document.getElementById("limpar7").onclick = function(event) {
         document.getElementById("p_conteudo7").innerHTML = "";
    };
    
// POST
    document.getElementById("post").onclick = function() {
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("p_conteudo7").innerHTML = ajax.responseText;
            } else if (this.readyState == 4 && this.status == 404) {
                var status = this.status;
                document.getElementById("p_conteudo7").innerHTML = ajax.responseText + " Não encontrado, erro " + status;
            } else if (this.readyState == 4 && this.status == 201) {
                document.getElementById("p_conteudo7").innerHTML = ajax.responseText;
            }
        }
        ajax.open("POST", "https://reqres.in/api/users", true);
        ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        ajax.send();
    };

    
// Limpar conteudo 8
    document.getElementById("limpar8").onclick = function(event) {
        document.getElementById("p_conteudo8").innerHTML = "";
    };

// PUT
    document.getElementById("put").onclick = function() {
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("p_conteudo8").innerHTML = ajax.responseText;
            } else if (this.readyState == 4 && this.status == 404) {
                var status = this.status;
                document.getElementById("p_conteudo8").innerHTML = ajax.responseText + " Não encontrado, erro " + status;
            } else if (this.readyState == 4 && this.status == 201) {
                document.getElementById("p_conteudo8").innerHTML = ajax.responseText;
            }
        }
        ajax.open("POST", "https://reqres.in/api/users/2", true);
        ajax.send();
    };

    
// Limpar conteudo 9
    document.getElementById("limpar9").onclick = function(event) {
        document.getElementById("p_conteudo9").innerHTML = "";
};
   
// PATCH
    document.getElementById("patch").onclick = function() {
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("p_conteudo9").innerHTML = ajax.responseText;
            } else if (this.readyState == 4 && this.status == 404) {
                var status = this.status;
                document.getElementById("p_conteudo9").innerHTML = ajax.responseText + " Não encontrado, erro " + status;
            } else if (this.readyState == 4 && this.status == 201) {
                document.getElementById("p_conteudo9").innerHTML = ajax.responseText;
            }
        }
        ajax.open("PATCH", "https://reqres.in/api/users/2", true);
        ajax.send();
    };


// Limpar
    document.getElementById("limpar10").onclick = function(event) {
        document.getElementById("p_conteudo10").innerHTML = "";
};

// DELETE
    document.getElementById("delete").onclick = function() {
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("p_conteudo10").innerHTML = ajax.responseText;
            } else if (this.readyState == 4 && this.status == 404) {
                var status = this.status;
                document.getElementById("p_conteudo10").innerHTML = ajax.responseText + " Não encontrado, erro " + status;
            } else if (this.readyState == 4 && this.status == 201) {
                document.getElementById("p_conteudo10").innerHTML = ajax.responseText;
            } else if (this.readyState == 4 && this.status == 204) {
                var status = this.status;
                document.getElementById("p_conteudo10").innerHTML = ajax.responseText + "Deletado usuário com sucesso";
            }
        }
        ajax.open("DELETE", "https://reqres.in/api/users/2", true);
        ajax.send();

    };
