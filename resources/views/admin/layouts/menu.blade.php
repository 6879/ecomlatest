@if(Auth::user()->roll==0)
<div class="st-pusher">
    <!-- Sidebar component with st-effect-3 (set on the toggle button within the navbar) -->
    <div class="sidebar left sidebar-size-2 sidebar-offset-0 sidebar-skin-blue sidebar-visible-desktop" id=sidebar-menu data-type=collapse>
        <div class="split-vertical">
            <div class="sidebar-block tabbable tabs-icons">
                <ul class="nav nav-tabs">
                    <li class="active"><a href="#sidebar-tabs-menu" data-toggle="tab"><i class="fa fa-bars"></i></a></li>
                    <li><a href="#sidebar-tabs-2" data-toggle="tab"><i class="fa fa-bar-chart-o"></i></a></li>
                </ul>
            </div>
            <div class="split-vertical-body">
                <div class="split-vertical-cell">
                    <div class="tab-content">

                        <div class="tab-pane active" id="sidebar-tabs-menu">
                            <div data-scrollable>                              
                                <ul class="sidebar-menu sm-bordered sm-active-item-bg">
                                    <li class="hasSubmenu">
                                        <a href="#submenu-media"><i class="fa fa-circle-o"></i> <span>Admin Config</span></a>
                                        <ul id="submenu-media">
                                            <li>
                                                <router-link to="/modulecreate"><i class="fa  fa-circle-o"></i> <span>Module Create</span></router-link>
                                            </li>
                                            <li>
                                                <router-link to="/menuentry"><i class="fa  fa-circle-o"></i> <span>Menu Entry</span></router-link>
                                            </li>
                                            <li>
                                                <router-link to="/submenuentry"><i class="fa  fa-circle-o"></i> <span>Sub Menu Entry</span></router-link>
                                            </li>
                                            <li>
                                                <router-link to="/admintype"><i class="fa  fa-circle-o"></i> <span>Admin Type</span></router-link>
                                            </li>
                                            <li>
                                                <router-link to="/adminentry"><i class="fa  fa-circle-o"></i> <span>Admin Entry</span></router-link>
                                            </li>
                                            <li>
                                                <router-link to="/menupermission"><i class="fa  fa-circle-o"></i> <span>Menu Permission</span></router-link>
                                            </li>
                                            <li>
                                                <router-link to="/editMenuPermission"><i class="fa  fa-circle-o"></i> <span>Menu Permission List</span></router-link>
                                            </li>
                                            <li>
                                                <router-link to="/categorypermission"><i class="fa  fa-circle-o"></i> <span>Category Permission</span></router-link>
                                            </li>
                                            <li>
                                                <router-link to="/editcatpermission"><i class="fa  fa-circle-o"></i> <span>Category Permission List</span></router-link>
                                            </li>
                                            <li>
                                                <router-link to="/pricerange"><i class="fa  fa-circle-o"></i> <span>Price Range Setup</span></router-link>
                                            </li>
                                            <li>
                                                <router-link to="/filteringstatus"><i class="fa  fa-circle-o"></i> <span>Filtering Status</span></router-link>
                                            </li>
                                        </ul>
                                    </li>
                                    @php
                                    $module=DB::table('modules')->orderby('modulePosition','asc')->get();
                                    @endphp
                                    @foreach($module as $modules)
                                    <li class="hasSubmenu">
                                        <a href="#module{{$modules->id}}" style="background-color: rgb(174, 153, 153);color: black;">{{$modules->moduleName}}</a>
                                        <ul id="module{{$modules->id}}">
                                            @php
                                            $menu=DB::table('menus')->where('moduleId',$modules->id)->get();
                                            @endphp
                                            @foreach($menu as $menus)
                                            @if($menus->substatus==0)

                                            <li class="">
                                            <router-link to="/{{$menus->menuUrl}}"><i class="fa  fa-circle-o"></i> <span>{{$menus->menuName}}</span></router-link>
                                            </li>
                                            @else

                                            <li class="hasSubmenu">
                                                <a href="#sub{{$menus->id}}"><i class="fa fa-circle-o"></i> <span>{{$menus->menuName}}</span></a>
                                                <ul id="sub{{$menus->id}}">
                                                    @php
                                                    $submenu=DB::table('sub_menus')->where('moduleId',$modules->id)->where('menuId',$menus->id)->get();
                                                    @endphp
                                                    @foreach($submenu as $submenus)
                                                    <router-link to="/{{$submenus->subMenuUrl}}"><i class="fa fa-pie-chart" aria-hidden="true"></i>
 <span>{{$submenus->subMenuName}}</span></router-link>
                                                    @endforeach
                                                </ul>
                                            </li>
                                            @endif
                                            @endforeach
                                        </ul>
                                    </li>
                                    @endforeach

                                </ul>
                            </div>
                        </div>
                        <!-- // END .tab-pane -->


                    </div>
                    <!-- // END .tab-content -->

                </div>
                <!-- // END .split-vertical-cell -->

            </div>


        </div>
    </div>
    @else
    <div class="st-pusher">
        <!-- Sidebar component with st-effect-3 (set on the toggle button within the navbar) -->
        <div class="sidebar left sidebar-size-2 sidebar-offset-0 sidebar-skin-blue sidebar-visible-desktop" id=sidebar-menu data-type=collapse>
            <div class="split-vertical">
                <div class="sidebar-block tabbable tabs-icons">
                    <ul class="nav nav-tabs">
                        <li class="active"><a href="#sidebar-tabs-menu" data-toggle="tab"><i class="fa fa-bars"></i></a></li>
                        <li><a href="#sidebar-tabs-2" data-toggle="tab"><i class="fa fa-bar-chart-o"></i></a></li>
                    </ul>
                </div>
                <div class="split-vertical-body">
                    <div class="split-vertical-cell">
                        <div class="tab-content">

                            <div class="tab-pane active" id="sidebar-tabs-menu">
                                <div data-scrollable>

                                    <!-- <ul class="sidebar-menu sm-icons-right sm-icons-block">
                                            <li class="active"><a href="index.html"><i class="fa fa-home"></i> <span>Dashboard</span></a></li>
                                            <li><a href="email.html"><i class="fa fa-envelope"></i> <span>Email</span></a></li>
                                            <li><a href="chat.html"><i class="fa fa-comments"></i> <span>Chat</span></a></li>
                                        </ul> -->

                                    <!-- <h4 class="category">Components</h4> -->
                                    <ul class="sidebar-menu sm-bordered sm-active-item-bg">
                                        @php
                                        $catpermission=App\Models\CategoryPermission::where('admin',Auth::user()->id)->limit(1)->get();
                                        @endphp
                                        @php
                                        $cat=App\Models\Category::get();
                                        @endphp
                                        @php
                                        $permission=App\Models\AdminPermission::where('admin',Auth::user()->id)->distinct()->get(['moduleId']);
                                        @endphp
                                        @php
                                        $permissionmenu=App\Models\AdminPermission::where('admin',Auth::user()->id)->distinct()->get(['menuId']);
                                        @endphp
                                        @php
                                        $permissionsubmenu=App\Models\AdminPermission::where('admin',Auth::user()->id)->distinct()->get(['subMenuId']);
                                        @endphp
                                        @foreach($permission as $permissions)

                                        @php
                                        $module=DB::table('modules')->orderby('modulePosition','asc')->where('id',$permissions->moduleId)->get();
                                        @endphp
                                        @foreach($catpermission as $catpermissions)
                                        <li class="">
                                        <router-link
                  to="/productimage"
                  class="btn btn-primary"
                  ><i class="fa fa-external-link" ></i> <span>
                                                  Category                                               
                                                    </span>
                                        </router-link>
                                                </li>
                                         @endforeach       
                                        @foreach($module as $modules)
                                        <li class="hasSubmenu">
                                            <a href="#module{{$modules->id}}" style="background-color: rgb(174, 153, 153);color: black;">{{$modules->moduleName}}</a>
                                            <ul id="module{{$modules->id}}">

                                                @foreach($permissionmenu as $permissionget)
                                                @php
                                                $menu=DB::table('menus')->where('id',$permissionget->menuId)->where('moduleId',$modules->id)->get();
                                                @endphp
                                                @foreach($menu as $menus)
                                                @if($menus->substatus==0)

                                                <li class="">
                                                    <router-link to="{{$menus->menuUrl}}"><i class="md md-tab-unselected"></i> <span>{{$menus->menuName}}</span></router-link>
                                                </li>
                                                @else

                                                <li class="hasSubmenu">
                                                    <a href="#sub{{$menus->id}}"><i class="fa fa-circle-o"></i> <span>{{$menus->menuName}}</span></a>
                                                    <ul id="sub{{$menus->id}}">
                                                        @foreach($permissionsubmenu as $permissionsubget)
                                                        @php
                                                        $submenu=DB::table('sub_menus')->where('id',$permissionsubget->subMenuId)->where('menuId',$menus->id)->get();
                                                        @endphp
                                                        @foreach($submenu as $submenus)
                                                        <li><a href="charts-morris.html"><i class="fa fa-bar-chart"></i> <span>{{$submenus->subMenuName}}</span></a></li>
                                                        @endforeach
                                                        @endforeach
                                                    </ul>
                                                </li>
                                                @endif
                                                @endforeach
                                                @endforeach
                                            </ul>
                                        </li>

                                        @endforeach
                                        @endforeach
                                    </ul>
                                </div>
                            </div>
                            <!-- // END .tab-pane -->


                        </div>
                        <!-- // END .tab-content -->

                    </div>
                    <!-- // END .split-vertical-cell -->

                </div>


            </div>
        </div>
        @endif