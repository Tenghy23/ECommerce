using Domain.Entities;
using Domain.Interfaces;
using Infrastructure;
using Infrastructure.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Application.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : Controller
    {
        private readonly StoreDbContext _context;
        private readonly IProductRepository _productRepository;

        public ProductsController(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProducts()
        {
            try
            {
                var products = await _productRepository.GetProductsAsync();
                return Ok(products);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Exception of type: {ex}");
                throw new Exception();
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<string>> GetProduct(Guid id)
        {
            try
            {
                var products = await _productRepository.GetProductByIdAsync(id);
                return Ok(products);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Exception of type: {ex}");
                throw new Exception();
            }
        }

        [HttpGet("brands")]
        public async Task<ActionResult<IReadOnlyList<ProductBrand>>> GetProductBrands()
        {
            try
            {
                var products = await _productRepository.GetProductBrandsAsync();
                return Ok(products);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Exception of type: {ex}");
                throw new Exception();
            }
        }

        [HttpGet("types")]
        public async Task<ActionResult<IReadOnlyList<ProductBrand>>> GetProductTypes()
        {
            try
            {
                var products = await _productRepository.GetProductTypesAsync();
                return Ok(products);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Exception of type: {ex}");
                throw new Exception();
            }
        }
    }
}