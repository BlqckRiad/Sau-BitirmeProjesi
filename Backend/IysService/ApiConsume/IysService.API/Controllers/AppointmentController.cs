using AutoMapper;
using IysService.BusinessLayer.Abstract;
using IysService.DtoLayer.MappingDtos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace IysService.API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AppointmentController : ControllerBase
    {
        private readonly IAppointmentService _appointmentService;
        private readonly IMapper _mapper;
        public AppointmentController(IAppointmentService appointmentService , IMapper mapper)
        {
            _appointmentService = appointmentService;
            _mapper = mapper;
        }
        [HttpGet]
        public IActionResult GetAllAppointments()
        {
            var appointments = _appointmentService.TGetList().Where(x => x.IsDeleted == false);
            var appointmentMappeds = _mapper.Map<List<AppointmentListMapDto>>(appointments);

            return Ok(appointmentMappeds);
        }

    }
}
