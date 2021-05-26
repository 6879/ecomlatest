<?php

namespace Database\Seeders;

use App\Http\Resources\UnitEntry;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
      
        $this->call([
            ProductsTableSeeder::class,
            ModulesTableSeeder::class,
            MenuTablesSeeder::class,
            AdminTypeTablesSeeder::class,
            SubMenuSeeder::class,
            LogoSeeder::class,
            SliderSeeder::class,
            PrivacySeeder::class,
            TermsSeeder::class,
            OrderPolicySeeder::class,
            AboutUsSeeder::class,
            CategorySeeder::class,
            UnitEntrySeeder::class,
            BrandSeeder::class,
            ColorSeeder::class,
            SizeSeeder::class,
            SupplierSeeder::class,
            ProductNameSeeder::class,
            ProductCategorySeeder::class,
            BusinessTypeSeeder::class,
            PurchaseTypeSeeder::class,
            PurchaseProductSeeder::class,
            PurchaseInvoiceSeeder::class,
            PriceSetupSeeder::class,
            WarehouseLocationSeeder::class,
            WarehouseSeeder::class,
        ]);
    }
}
