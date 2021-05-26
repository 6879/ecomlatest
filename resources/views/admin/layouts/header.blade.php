<!DOCTYPE html>
<html class="st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l2" lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <mete name="csrf-token" content="{{csrf_token()}}">
  <meta name="userId" content="{{ Auth::user() }}">
        <title>My Profession</title>
        <link href="{{URL::asset('frontendadmin/css/vendor/all.css')}}" rel="stylesheet">
        <link href="{{URL::asset('frontendadmin/css/app/app.css')}}" rel="stylesheet">
</head>

<body>
    <div class="st-container" id="app">
        <div class="navbar navbar-default navbar-fixed-top" role="navigation">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a href="#sidebar-menu" data-toggle="sidebar-menu" data-effect="st-effect-3" class="toggle pull-left visible-xs"><i class="fa fa-bars"></i></a>

                    <a href="#sidebar-chat" data-toggle="sidebar-menu" class="toggle pull-right"><i class="fa fa-comments"></i></a>

                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a href="index.html" class="navbar-brand hidden-xs navbar-brand-primary">ThemeKit</a>
                </div>
                <div class="navbar-collapse collapse" id="collapse">
                    <form class="navbar-form navbar-left hidden-xs" role="search">
                        <div class="search-2">
                            <div class="input-group">
                                <input type="text" class="form-control form-control-w-150" placeholder="Search ..">
                                <span class="input-group-btn">
                                    <button class="btn btn-primary" type="button"><i class="fa fa-search"></i></button>
                                </span>
                            </div>
                        </div>
                    </form>
                    <ul class="nav navbar-nav navbar-right">
                        <!-- notifications -->
                        <li class="dropdown notifications updates hidden-xs hidden-sm">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                <i class="fa fa-bell-o"></i>
                                <span class="badge badge-primary">4</span>
                            </a>
                            <ul class="dropdown-menu" role="notification">
                                <li class="dropdown-header">Notifications</li>
                                <li class="media">
                                    <div class="media-body">
                                        <a href="#">Adrian D.</a> posted <a href="#">a photo</a> on his timeline.
                                        <br />
                                        <span class="text-caption text-muted">5 mins ago</span>
                                        @if(Auth::check())
                                        @foreach(\App\Models\User::all() as $user)
                                        @if($user->isOnline())
                                        {{$user->name}}
                                    
                                        @endif
                                    
                                        @endforeach
                                        @endif
                                     
                                    </div>
                                </li>


                            </ul>
                        </li>
                        <!-- // END notifications -->
                        <!-- messages -->
                        <li class="dropdown notifications hidden-xs hidden-sm">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                <i class="fa fa-envelope-o"></i>

                                <span class="badge floating badge-danger">12</span>

                            </a>
                            <ul class="dropdown-menu">

                                <li class="media">
                                    <div class="media-left">
                                        <a href="#">
                                            <img class="media-object thumb" src="" alt="people">
                                        </a>
                                    </div>

                                    <div class="media-body">
                                        <div class="pull-right">
                                            <span class="label label-default">3 days</span>
                                        </div>
                                        <h5 class="media-heading">Andrew M.</h5>
                                        <p class="margin-none">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <!-- // END messages -->
                        <!-- user -->
                        <li class="dropdown user">
                            @if(Auth::User()->roll==8)
                            @php
                            $image=DB::table('delivery_men')->first();
                            @endphp
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                <img src="{{url('adminProfileImage/',$image->image)}}" alt="" class="img-circle" /> {{Auth::user()->name }}<span class="caret"></span>
                            </a>
                            @else
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                <img src="{{url('frontendadmin/images/people/110/guy-6.jpg')}}" alt="" class="img-circle" /> {{Auth::user()->name }}<span class="caret"></span>
                            </a>
                            @endif
                            <ul class="dropdown-menu" role="menu">
                                <li>
                                    <router-link to="/userprofile"><i class="fa fa-user"></i>Profile</router-link>
                                </li>
                                <li><a href="#"><i class="fa fa-user"></i>Support</a></li>
                                <li><a href="#"><i class="fa fa-wrench"></i>&nbsp;Privacy Setting</a></li>
                                <li>
                                    <router-link to="/changepassword">Change Password</router-link>
                                </li>
                                <li><a href="{{ url('logouts')}}/{{Auth::User()->id}} " onclick="event.preventDefault(); document.getElementById('logout-form').submit();"><i class="fa fa-sign-out"></i>Logout</a>
                                    <form id="logout-form" action="{{ url('logouts')}}/{{Auth::User()->id}} " method="POST" style="display: none;">
                                        {{ csrf_field() }}
                                    </form>
                                </li>
                            </ul>
                        </li>
                        <!-- // END user -->

                    </ul>
                </div>
            </div>
        </div>
        @include('admin.layouts.menu')
        @yield('content')

        <!-- Footer -->
        <footer class="footer">
            <strong>Daily Sodai</strong> &copy; Copyright 2021
        </footer>
        <!-- // Footer -->
    </div>
    <!-- /st-container -->
    <!-- Modal -->
    <div class="modal fade image-gallery-item" id="showImageModal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-header">
                On my way to the top
            </div>
            <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
            <!-- <img class="img-responsive" src="images/place1-full.jpg" alt="Place"> -->
        </div>
    </div>
    </div>
    <!-- Inline Script for colors and config objects; used by various external scripts; -->
    <script>
        var colors = {
            "danger-color": "#e74c3c",
            "success-color": "#81b53e",
            "warning-color": "#f0ad4e",
            "inverse-color": "#2c3e50",
            "info-color": "#2d7cb5",
            "default-color": "#6e7882",
            "default-light-color": "#cfd9db",
            "purple-color": "#9D8AC7",
            "mustard-color": "#d4d171",
            "lightred-color": "#e15258",
            "body-bg": "#f6f6f6"
        };
        var config = {
            theme: "admin",
            skins: {
                "default": {
                    "primary-color": "#3498db"
                }
            }
        };
    </script>
    <script src="{{ asset('js/app.js') }}"></script>
    <script src="{{URL::asset('frontendadmin/js/vendor/all.js')}}"></script>
    <script src="{{URL::asset('frontendadmin/js/app/ap.js')}}"></script>
</body>


<!-- Mirrored from themekit.frontendmatter.com/dist/themes/admin/index.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 30 Dec 2019 19:23:14 GMT -->

</html>