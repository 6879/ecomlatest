@extends('layouts.header')
@section('content')


    <main class="content-wrapper">

    
       

     
     
        <div>
            <div class="col-12 col-md-12 col-sm-12 col-xs-12 headerdesign">
                <div class="row">
                    <div class="col-2 col-md-2 col-sm-2 col-xs-1" style="margin-top: 0.4rem !important">
                        <div >
                            <a class="navbar-brand d-none d-sm-block" href="#">
                                <img width="100%" height="50" src="{{url('images/' .$logo->image)}}" />
                            </a>
                        </div>
                        <div class="mt-0 d-md-none">
                            <a style="margin-top: 11px"><i class="fa fa-bars" style="color: black; line-height: 50px" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                    <div class="col-8 col-md-6 col-sm-6 col-xs-12">
                        <div class="form-inline" style="margin-top: 1.1rem !important">
                            <input class="form-control" type="text" placeholder="Search"  autofocus />
                         
                        </div>
                    </div>
                    <div class="dropdown col-2 col-sm-2 pt-4 col-md-2 col-xs-12 d-none d-sm-block headerhover hdbox">
                        <p class="d-md-none d-lg-block" style="font-weight: bold">
                            <img src="/mapImage/map.png" style="height: 34px" />Delivery
                            Location
                        </p>
                        <div class="dropdown-content locationDrop" > 
                        @foreach($division as $divisions) 
               <div  class="locationborder">  
                 <router-link to="districtlocation/{{$divisions->divisionId}}"><p class="dlist"><img src="mapImage/bdflag.webp" width="15%" height="5%"/>{{$divisions->division->name}}</p></router-link>
              </div>
              @endforeach
          </div> 
                    </div>
                    <div class="col-2 col-md-1 pt-4 pl-3 pr-1 lang col-sm-1 col-xs-12 d-none d-sm-block headerhover hdbox" style="padding-left: 1.5rem !important">
                        <p><span style="color: red">EN </span>| বাং</p>
                    </div>
                  
                   
                    
                    <!-- Button trigger modal -->



                 

                    <div class="col-2 mt-2 col-xs-4" style="top: 11px">
                        <i class="fa fa-ellipsis-v d-md-none mt-2 menuHeight" data-toggle="modal" data-target="#exampleModalCenter" aria-hidden="true"></i>
                    </div>
                </div>
            </div>

        </div>
        <!-- ./sidenav and searchbar  -->


        <!-- slider -->
        <div v-if="!$route.meta.hideDashboard">
            <div class="container-fluid">
                <div class="col-12 col-md-12 col-xs-12 mainBox">
                    <div class="row">
                        @foreach($sliders as $slider)
                        @if($slider->left==1)
                        <div class="col-12 col-md-3 col-xs-12 d-none d-sm-block paddingImage hover01">
                            <router-link to="{{$slider->url}}">
                                <figure>
                                    <img class="img-fluid box1Image" src="{{url('images/'.$slider->image)}}" />
                                </figure>
                            </router-link>
                        </div>
                        @endif
                        @endforeach

                        <div class="col-12 col-md-9 col-xs-12 paddingImage">
                            @foreach($sliders as $slider)
                            @if($slider->up==1)
                            <div class="col-12 col-md-12 col-xs-12 d-none d-sm-block paddingImage hover01">
                                <figure>
                                    <img class="img-fluid " src="{{url('images/'.$slider->image)}}" />
                                </figure>
                            </div>
                            @endif
                            @endforeach
                            <div class="col-12 col-md-12 col-xs-12">
                                <div class="row">
                                    @foreach($sliders as $slider)
                                    @if($slider->right==1)
                                    <div class="col-6 col-md-3 col-xs-4 paddingImage hover01">
                                        <figure>
                                            <img class="img-fluid box3Image" src="{{url('images/'.$slider->image)}}" />
                                        </figure>
                                    </div>
                                    @endif
                                    @endforeach
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- ./slider -->


        <!-- content category -->
        <div v-if="!$route.meta.hideDashboard">
            <div class="container-fluid">
                <div class="row">
                    @php
                    $menucats=\App\Models\Category::where('lavel', 1)->orderby('catPosition', 'asc')->get();
                    @endphp
                    @foreach($menucats as $menucat)
                    <div class="col-6 col-md-3 col-xs-4 hover01">
                        <div class="col-12 col-md-12 col-xs-12">
                            <router-link to="view/{{$menucat->id}}">
                                <figure>
                                    <img class="img-fluid box3Images" src="{{url('categoryImage/'.$menucat->catImage)}}" />
                                </figure>
                            </router-link>
                            <center>
                                <router-link to="view/{{$menucat->id}}">
                                    {{ $menucat->catName }}
                                </router-link>
                            </center>
                        </div>
                    </div>
                    @endforeach
                </div>
            </div>
        </div>
        <div >
            <div class="container-fluid">
                <div class="row"></div>
            </div>
        </div>
        <!-- ./content category -->

     

       <app></app>


@endsection