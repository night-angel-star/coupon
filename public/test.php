<?php
session_start();

?>
<!DOCTYPE html>
<html>

<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Page Title</title>
</head>

<body>
    <?php 
    if (isset($_REQUEST["act"]))
        $act = $_REQUEST["act"];
    else
        $act = "";
    ?>
        <a href="<?=$_SERVER["SCRIPT_NAME"]?>?act=home"  class="shs_link ITEM" data-code="menu.home">home</a>
        <a href="<?=$_SERVER["SCRIPT_NAME"]?>?act=shop"  class="shs_link ITEM" data-code="menu.SHOPPING">shop</a>
        <?php if  (empty($_SESSION['logged_in']))  { ?>
        <a href="<?=$_SERVER["SCRIPT_NAME"]?>?act=login" class="shs_link ITEM cc_btn_login" data-code="menu.login" >login</a>
        <?php } else { ?>
        <a href="<?=$_SERVER["SCRIPT_NAME"]?>?act=loggout" class="mf_info_link MM_LOGINOUT" data-code="menu.loggout" data-fclk="fotshowlogout">loggout</a>
        <?php } ?>
        <a href="<?=$_SERVER["SCRIPT_NAME"]?>?act=login_check" class="shs_link ITEM" data-code="menu.search">search</a>
        <a href="<?=$_SERVER["SCRIPT_NAME"]?>?act=search_result" class="shs_link ITEM" data-code="menu.result">search result</a>
        <a href="<?=$_SERVER["SCRIPT_NAME"]?>?act=product" class="shs_link ITEM" data-code="menu.product">product</a>
        
    <?php if ($act == "home") { ?>
        <H1>This is Home page</H1>
    <?php } else if ($act == "shop") { ?>
            <H1>This is Shop page</H1>
            <form method=post>
                <input type=hidden name=act value="search_result">
                <input type=text name="query" id="query" class="sh_input">
                <input type=submit class="sch_btn_search">
            </form>
            <?php if  (empty($_SESSION['logged_in']))  { ?>
            <?php } else { ?>
            <?php } ?>                
    <?php } else if ($act == "login") { ?>*/
        <H1>This is Login page</H1>
        <form method="POST" action="<?=$_SERVER["SCRIPT_NAME"]?>">
            <input type=hidden name="act" value="do_login">
            <input type=text name="id" id="id" >
            <input type=password name="pw" id="pw" >
            <input type=submit id="log.login" class="btn_check">
        </form>
    <?php } else if ($act == "do_login") { 
        $_SESSION['logged_in'] = true;
    ?>
    <script>
        location.href = "<?=$_SERVER['SCRIPT_NAME']?>?act=shop";
    </script>
    <?php } else if ($act == "login_check") { ?>*/
                        login_check();
                        /*
    <?php } else if ($act == "search_result") { ?>
        <a href="<?=$_SERVER['SCRIPT_NAME']?>?act=product&nv_mid=1234567890" class="product">PRODUCT</a>
        <a href="<?=$_SERVER['SCRIPT_NAME']?>?act=product&nv_mid=1234567891" class="product">PRODUCT</a>
    <?php } else if ($act == "product") { ?>
        <H1>This is Product page</H1>
    <?php } else if ($act == "loggout") { ?>
        <?php unset($_SESSION['logged_in']); ?>
    <?php } else { ?>
        
    <?php } ?>



</body>

</html>
