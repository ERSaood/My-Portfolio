# Fix: ModuleNotFoundError - No module named 'contact'

## Steps
- [x] Create plan and get approval
- [ ] Step 1: Edit `portfolio_backend/settings.py` - Remove `"contact"` from `INSTALLED_APPS`
- [ ] Step 2: Update `portfolio_backend/contact/admin.py` - Add Contact model registration
- [ ] Step 3: Delete root `admin.py`
- [ ] Step 4: Verify by running the Django server

