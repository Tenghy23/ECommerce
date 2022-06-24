using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System.Text.Json;

namespace Infrastructure
{
    // only for seeding data when application runs
    public class StoreContextSeed
    {
        public static async Task SeedAsync(StoreDbContext context, ILoggerFactory loggerFactory)
        {
            try
            {
                if (!context.Products.Any())
                {
                    var productsData = File.ReadAllText("../Infrastructure/SeedData/products.json");
                    var products = JsonSerializer.Deserialize<List<Product>>(productsData);
                    foreach (var item in products!)
                        context.Products.Add(item);

                    //context.Database.ExecuteSqlRaw("SET IDENTITY_INSERT ProductTypes ON");
                    await context.SaveChangesAsync();
                    //context.Database.ExecuteSqlRaw("SET IDENTITY_INSERT ProductTypes OFF");
                }

                if (!context.ProductBrands.Any())
                {
                    var brandsData = File.ReadAllText("../Infrastructure/SeedData/brands.json");
                    var brands = JsonSerializer.Deserialize<List<ProductBrand>>(brandsData);
                    foreach (var item in brands!)
                        context.ProductBrands.Add(item);

                    //context.Database.ExecuteSqlRaw("SET IDENTITY_INSERT ProductBrands ON");
                    await context.SaveChangesAsync();
                    //context.Database.ExecuteSqlRaw("SET IDENTITY_INSERT ProductBrands OFF");
                }

                if (!context.ProductTypes.Any())
                {
                    var typesData = File.ReadAllText("../Infrastructure/SeedData/types.json");
                    var types = JsonSerializer.Deserialize<List<ProductType>>(typesData);
                    foreach (var item in types!)
                        context.ProductTypes.Add(item);

                    //context.Database.ExecuteSqlRaw("SET IDENTITY_INSERT Products ON");
                    await context.SaveChangesAsync();
                    //context.Database.ExecuteSqlRaw("SET IDENTITY_INSERT Products OFF");
                }
            } 
            catch (Exception ex)
            {
                var logger = loggerFactory.CreateLogger<StoreContextSeed>();
                logger.LogError(ex.Message);
            }
        }
    }
}
