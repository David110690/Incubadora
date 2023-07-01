<?php
include ("home.html");
?>
<div id="error" class="error" style="display: none; color: #135058; font-family: 'Caveat', cursive, sans-serif;">
        <h1 class="errorText" id="modalText"></h1>
</div>

<div class="formulario">
    <form action="" method="post">
        <div class="form">
            <h1>Inicio de Sesiòn</h1>
            <h1>Incubadora UTP</h1>
            <div class="grupo">
                <input type="text" name="nombreReg" id="nombreReg" required><span class="barra"></span>
                <label>Nombre</label>
            </div>
            <div class="grupo">
                <input type="text" name="tipoUsuarioReg" id="tipoUsuarioReg" required><span class="barra"></span>
                <label>Tipo de usuario</label>
            </div>
            <div class="grupo">
                <input type="number" name="dniReg" id="dniReg" required><span class="barra"></span>
                <label>Dni</label>
            </div>
            <div class="grupo">
                <input type="password" name="passwordReg" id="passwordReg" required><span class="barra"></span>
                <label>Contraseña</label>
            </div>
            <button id="registrate">Registrate</button>
        </div>
    </form>
</div>