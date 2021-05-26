<div class="col-6 col-md-2 mt-0 d-none d-sm-block"  style="position:fixed">
    <div >
    @php
    $offer=\App\Models\Offer::count();
    @endphp
 
        <ul class="navbar-nav mr-auto sidenav shadow p-3 mb-5  bg-white rounded" id="navAccordion">
        @if($offer!==0)
        <button  ><router-link to='/offerview'><i class="fa fa-gift"></i> OFFER<span class="amount">&nbsp;<b>({{$offer}})</b></span></router-link></button>
        @endif
        <div class="container">
           
    <div id="accordion" class="accordion1">
        @foreach($menus as $menu)
        <div class="card mb-0 navb">
            <div class="card-header collapsed" data-toggle="collapse" href="#collapseOne{{$menu->id}}">
            <router-link
              style="text-decoration: none; color: inherit"
              to="/view/{{ $menu->id }}"
              class="card-title"
            >
            <img class="menuImage"  src="{{url('categoryImage/' .$menu->image)}}"  />&nbsp;    {{$menu->catName}}
            </router-link>
            </div>
            <div id="collapseOne{{$menu->id}}" class="card-body collapse secondCat"  >
                @foreach($submenus as $submenu)
                @if($submenu->preId==$menu->id)
            <div class="card-header collapsed" data-toggle="collapse"  href="#collapseTwo{{$submenu->id}}">
            <router-link
              style="text-decoration: none; color: inherit"
              to="/viewthird/{{ $submenu->id }}"
              class="card-title"
            >
            {{$submenu->catName}}
            </router-link>
            </div>
         
            <div id="collapseTwo{{$submenu->id}}" class="card-body collapse" >
            @foreach($thirdmenus as $thirdmenu)
            @if($thirdmenu->preId==$submenu->id)
                <div class="" >
                <router-link
              style="text-decoration: none; color: inherit"
              to="/viewthird/{{ $thirdmenu->id }}"
              class="card-title"
            >
            {{$thirdmenu->catName}}
            </router-link>
            </div>
            @endif
            @endforeach
            </div>
          
            @endif
            @endforeach
            </div>
          
        </div>
        @endforeach
    </div>
</div>
        </ul>
  
    </div>
</div>
