using Application.DTOs;
using AutoMapper;
using Domain.Entities;
using Domain.Interfaces;
using Domain.Specifications;
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
        private readonly IMapper _mapper;

        public IGenericRepository<Product> _productRepo { get; }
        public IGenericRepository<ProductBrand> _productBrandRepo { get; }
        public IGenericRepository<ProductType> _productTypeRepo { get; }

        public ProductsController(
            IGenericRepository<Product> productRepo,
            IGenericRepository<ProductBrand> productBrandRepo,
            IGenericRepository<ProductType> productTypeRepo,
            IMapper mapper)
        {
            _productRepo = productRepo;
            _productBrandRepo = productBrandRepo;
            _productTypeRepo = productTypeRepo;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<List<ProductToReturnDto>>> GetProducts()
        {
            try
            {
                var spec = new ProductsWithTypesAndBrandsSpecification();
                var products = await _productRepo.ListAsync(spec);
                products.Select(p => new ProductToReturnDto
                {
                    Id = p.Id,
                    Name = p.Name,
                    Description = p.Description,
                    PictureUrl = p.PictureUrl,
                    Price = p.Price,
                    ProductBrand = p.ProductBrand.Name,
                    ProductType = p.ProductType.Name
                }).ToList();
                return Ok(products);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Exception of type: {ex}");
                throw new Exception();
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ProductToReturnDto>> GetProduct(Guid id)
        {
            try
            {
                var spec = new ProductsWithTypesAndBrandsSpecification(id);
                var product = await _productRepo.GetEntityWithSpec(spec);
                var productToReturnDto = _mapper.Map<Product, ProductToReturnDto>(product);
                return Ok(productToReturnDto);
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
                var products = await _productBrandRepo.ListAllAsync();
                return Ok(products);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Exception of type: {ex}");
                throw new Exception();
            }
        }

        [HttpGet("types")]
        public async Task<ActionResult<IReadOnlyList<ProductType>>> GetProductTypes()
        {
            try
            {
                var products = await _productTypeRepo.ListAllAsync();
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