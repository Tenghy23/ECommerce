﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public abstract class BaseEntity
    {
        public int Id { get; protected set; }
        public string CreatedBy { get; protected set; }
        public string UpdatedBy { get; protected set; }
        public DateTimeOffset DateTimeCreated { get; protected set; }
        public DateTimeOffset DateTimeUpdated { get; protected set; }

        protected BaseEntity()
        {
            DateTimeCreated = DateTimeOffset.Now;
            DateTimeUpdated = DateTimeCreated;
            CreatedBy = "SYSTEM";
            UpdatedBy = CreatedBy;
        }
    }
}