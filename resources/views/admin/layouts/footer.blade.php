
            <!-- Footer -->
            <footer class="footer">
                <strong>Daily Sodai</strong> &copy; Copyright 2021
            </footer>
            <!-- // Footer -->
        </div>
    </div>
    <!-- /st-container -->

    <!-- Modal -->
    <div class="modal fade image-gallery-item" id="showImageModal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-header">
                On my way to the top
            </div>
            <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
            <img class="img-responsive" src="images/place1-full.jpg" alt="Place">
        </div>
    </div>

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


    <script src="{{url('frontendadmin/js/vendor/all.js')}}"></script>
    <script src="{{url('frontendadmin/js/app/app.js')}}"></script>
</body>

</html>