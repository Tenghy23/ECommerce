﻿using Domain.Entities;
using Domain.ISpecifications;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Interfaces
{
    public interface IGenericRepository<T> where T : BaseEntity
    {
        Task<T> GetByIdAsync(Guid id);
        Task<IReadOnlyList<T>> ListAllAsync();
        Task<T> GetEntityWithSpec (ISpecification<T> spec);
        Task<IReadOnlyList<T>> ListAsync (ISpecification<T> spec);
    }
}
