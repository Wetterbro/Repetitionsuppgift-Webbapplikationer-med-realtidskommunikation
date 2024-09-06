
using System.ComponentModel.DataAnnotations;

namespace backend.Models;

public class Book
{
    [Key]
    public int Id { get; set; }
    [Required, MaxLength(100)]
    public string Title { get; set; }
    [Required, MaxLength(100)]
    public string Author { get; set; }
    [Required, MaxLength(100)]
    public string ISBN { get; set; }
}