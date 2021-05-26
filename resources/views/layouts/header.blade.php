<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
 <meta name="user-id" content="{{ Auth::guard('customer')->user() }}">
 
  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css">
  <link rel="stylesheet" href="{{URL::asset('frontend/css/bootstrap.min.css')}}" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
  <link rel="stylesheet" href="{{URL::asset('frontend/css/sidebar.css')}}">
  <link rel="stylesheet" href="{{URL::asset('frontend/css/style.css')}}">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css" media="screen">
  <script src="//cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.js"></script>
  <link href="https://unpkg.com/animate.css@3.5.2/animate.min.css" rel="stylesheet" />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-tagsinput/0.8.0/bootstrap-tagsinput.js"></script>
  
 <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
 
  <title> Daily Sodai</title>
</head>

<body class="bodyBg">
  <div id="server">
    @include('layouts.menu')

    @yield('content')

    <!-- Sidebar Right -->
    <div class="modal fade right" id="sidebar-right" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content1">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">Right Sidebar</h4>
          </div>
          <div class="modal-body">

            <ul class="nav nav-pills nav-stacked text-center lead">
              <li role="presentation" class="active"><a href="#home">Home</a></li>
              <li role="presentation" class="dropdown">
                <a href="#" class="dropdown-toggle" id="myTabDrop1" data-toggle="dropdown" aria-controls="myTabDrop1-contents" aria-expanded="false">Services <span class="fa fa-fw fa-chevron-down"></span></a>
                <ul class="dropdown-menu btn-block">
                  <li><a href="#design" role="tab">Design</a></li>
                  <li><a href="#develop" role="tab">Develop</a></li>
                  <li><a href="#support" role="tab">Support</a></li>
                </ul>
              </li>
              <li role="presentation"><a href="#about">About</a></li>
            </ul>

            <hr>

            <div class="form-group hide">
              <div class="input-group">
                <input class="form-control" placeholder="Search">
                <span class="input-group-btn">
                  <button class="btn btn-default" type="button"><i class="fa fa-fw fa-search"></i></button>
                </span>
              </div>
            </div>

            <div class="form-group has-feedback">
              <input type="text" class="form-control" id="search-right" placeholder="Search">
              <span class="glyphicon glyphicon-search form-control-feedback" aria-hidden="true"></span>
            </div>

            <hr>

            <div class="btn-group-vertical center-block">
              <a class="btn btn-instagram btn-lg" href="https://www.instagram.com/jorenerene/" target="_blank"><i class="fa fa-fw fa-instagram"></i></a>
              <a class="btn btn-twitter btn-lg" href="https://www.twitter.com/jorenerene/" target="_blank"><i class="fa fa-fw fa-twitter"></i></a>
              <a class="btn btn-github btn-lg" href="https://www.github.com/jorenerene/" target="_blank"><i class="fa fa-fw fa-github"></i></a>
            </div>

          </div>
        </div>
      </div>
    </div>
    
    <!-- Main content Footer -->
    <div class="astrodivider  d-none d-sm-block">
      <div class="astrodividermask"></div><span><i class="fas fa-angle-double-down"></i></span>
    </div>
    <div class="container-fluid  d-none d-sm-block">
      <div class="row">
        <div class='col-12 col-md-8 col-xs-12 paddingImage'>
          <div class="row mr-0">
            <div class='col-6 col-md-4 col-xs-6 paddingImage'>
              <ul class="" style="list-style-type: none;">
                <h5 class="d-none d-sm-block">Customer Service</h5>
                <li class="nav-item active">
                  <a class="nav-link " href="#"><span class="sidebarColor">Contact Us</a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link " href="#"><span class="sidebarColor">FAQ</a>
                </li>


              </ul>
            </div>
            <div class='col-6 col-md-4 col-xs-6 paddingImage'>
              <ul class="" style="list-style-type: none;">
                <h5 class=" d-none d-sm-block">About Daily Bazar</h5>
                <li class="nav-item active">
                  <a class="nav-link " href="#"><span class="sidebarColor">Privacy Policy</a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link " href="#"><span class="sidebarColor">Terms of use</a>
                </li>


              </ul>
            </div>
            <div class='col-6 col-md-4  d-none d-sm-block'>
              <ul class="" style="list-style-type: none;">
                <h5>For business</h5>
                <li class="nav-item active">
                  <a class="nav-link " href="#"><span class="sidebarColor">corporate</a>
                </li>


              </ul>
            </div>
          </div>
        </div>
        <div class='col-12 col-md-4 col-xs-12'>
          <p class="contactFooterc"><img src="{{URL::asset('frontend/image/phone.webp')}}">&nbsp;018768877</p>
          <b><i class="fa fa-envelope" aria-hidden="true" style="text-indent: 14px;"></i>&nbsp;support@dailysodai.com</b>
          <div class="d-flex bd-highlight">
            <div class="p-2 flex-fill bd-highlight"><img src="{{URL::asset('frontend/image/facebook.webp')}}"></div>
            <div class="p-2 flex-fill bd-highlight"><img src="{{URL::asset('frontend/image/ins.webp')}}"></div>
            <div class="p-2 flex-fill bd-highlight"><img src="{{URL::asset('frontend/image/youtube.webp')}}"></div>
            <div class="p-2 flex-fill bd-highlight"><img src="{{URL::asset('frontend/image/twitter.webp')}}"></div>
          </div>
        </div>

      </div>

    </div>
    <!-- Main content Footer -->
  

    <!-- ./content -->
    </main>

  
  </div>

  <script src="{{ asset('js/server.js') }}"></script>
 
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
  <script src="{{URL::asset('frontend/js/bootstrap.min.js')}}" ></script>
  <script src="{{URL::asset('frontend/js/sidebar.js')}}"></script>
  <script src="{{URL::asset('frontend/js/animation.js')}}"></script>
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  <script src="https://unpkg.com/vue@2.2.4/dist/vue.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"></script>
  <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
  


   
</body>

</html>