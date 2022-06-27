using Application.DTOs;
using AutoMapper;
using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Helpers
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Product, ProductToReturnDto>()
                .ForMember(d => d.ProductBrand, o => o.MapFrom(s => s.ProductBrand.Name))
                .ForMember(d => d.ProductType, o => o.MapFrom(s => s.ProductType.Name))
                .ForMember(d => d.PictureUrl, o => o.MapFrom<ProductUrlResolver>());
        }
    }
}

/* assign ProductToReturnDto.ProductBrand = Product.ProductBrand.Name
 * same for ProductType */

/* A helper class is just a bin into which you throw a bunch of useful methods that have no better place. 
 * It's the "other" or "misc" compartment in your toolbox. Identification of some miscellaneous,
 * commonly used operations and attempted to make them reusable by lumping them together
 * in an unnatural grouping */