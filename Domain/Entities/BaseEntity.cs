using Domain.Constants;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public abstract class BaseEntity
    {
        public Guid Id { get; protected set; }
        public string CreatedBy { get; protected set; }
        public string UpdatedBy { get; protected set; }
        public DateTimeOffset DateTimeCreated { get; protected set; }
        public DateTimeOffset DateTimeUpdated { get; protected set; }

        //protected BaseEntity()
        //{
        //    Id = Guid.NewGuid();
        //    CreatedBy = StringConstants.SYSTEM;
        //    UpdatedBy = StringConstants.SYSTEM;
        //    DateTimeCreated = DateTimeOffset.Now;
        //    DateTimeUpdated = DateTimeOffset.Now;
        //}
    }
}