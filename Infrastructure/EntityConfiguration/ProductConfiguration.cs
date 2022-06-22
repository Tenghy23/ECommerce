using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.EntityConfiguration
{
    public class ProductConfiguration : IEntityTypeConfiguration<Product>
    {
        /* this custom EF config allows us to config the entity to 
            however we want by utilising the builder */
        public void Configure(EntityTypeBuilder<Product> builder)
        {
            builder.Property(p => p.Id).IsRequired();
            builder.Property(p => p.Name).IsRequired().HasMaxLength(100);
            builder.Property(p => p.Description).IsRequired();
            builder.Property(p => p.Price).HasColumnType("decimal(18,2)");
            builder.Property(p => p.PictureUrl).IsRequired();

            builder.HasOne(b => b.ProductBrand).WithMany()
                .HasForeignKey(p => p.ProductBrandId);
            builder.HasOne(t => t.ProductType).WithMany()
                .HasForeignKey(p => p.ProductTypeId);
        }
    }
}

/* map relationship, 1 product, many Brand, 1 Brand can associate
    with many products, same with ProductType */
