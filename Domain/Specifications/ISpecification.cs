using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Domain.ISpecifications
{
    public interface ISpecification<T>
    {
        // Expression takes a Func, which takes a type and returns a boolean value
        Expression<Func<T, bool>> Criteria { get;  }
        List<Expression<Func<T, object>>> Includes { get;  }
    }
}
