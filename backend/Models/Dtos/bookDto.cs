using System.ComponentModel.DataAnnotations;

namespace backend.Models.Dtos;

public class BookDto
{
    [Required, MaxLength(100)]
    public string  Title { get; set; }
    [Required, MaxLength(100)]
    public string Author { get; set; }
    [Required, MaxLength(100)]
    public string ISBN { get; set; }
}