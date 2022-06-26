using Domain.ISpecifications;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Specifications
{
    public class BaseSpecification<T> : ISpecification<T>
    {
        public BaseSpecification()
        {
            // create empty constructor
        }

        public BaseSpecification(Expression<Func<T, bool>> criteria)
        {
            // create constructor that takes in criteria
            Criteria = criteria;
        }

        public Expression<Func<T, bool>> Criteria { get; }

        public List<Expression<Func<T, object>>> Includes { get; } =
            new List<Expression<Func<T, object>>>();

        protected void AddInclude(Expression<Func<T, Object>>includeExpression)
        {
            Includes.Add(includeExpression);
        }
    }
}

/* Expression<Func<T, Object>> is an Expression which consist of a func
 * which takes in a object & returns a generic type */