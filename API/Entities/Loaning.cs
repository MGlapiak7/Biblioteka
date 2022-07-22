namespace API.Entities
{
    public class Loaning
    {
        public int Id { get; set; }
        public DateTime LoanDate { get; set; }
        public DateTime ReturnDate { get; set; }
        public int MyProperty { get; set; }        
    }
}