using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CosmosApp.Models
{
    public class Planet
    {
        [Key]
        public int ID { get; set; }
        public string Name { get; set; }
        [DisplayName("Distance (Million Km)")]
        public double Distance { get; set; }
    }
}
