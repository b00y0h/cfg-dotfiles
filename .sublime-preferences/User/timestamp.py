"""
Automatically add and update time stamps in your files.
On file open, will replace [timeStamp] with the current date and time.
Currently looks for two instances of this (example below).

To use, place the text [timeStamp] in your template file where you want it.
ex.
//  CREATED: timeStamp
// MODIFIED: timeStamp

When you open this file for the first time, both [timeStamp] will change to
the current date and time. Every save, the MODIFIED line will update.

NOTE: After installing, don't open this file in Sublime Text because it will change
[timeStamp] in the code to the current time. Oops =]
"""
import datetime
import sublime
import sublime_plugin

TIMESTAMP_CODE = 'timeStamp'
TIMESTAMP_PATTERN = 'MODIFIED:\\s*20[0-9][0-9]-\\d+-\\d+\\s+\\d+:\\d+:\\d+(\\.\\d+)?'

class InsertTimestampListener (sublime_plugin.EventListener):
  """
  When opening file, search for TIMESTAMP_CODE and replace it with current time
  """
  def on_load (self,view):
    region = view.find (TIMESTAMP_CODE, 1)
    if region :
      timestamp = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
      edit = view.begin_edit()
      view.replace(edit, region, timestamp)
      view.end_edit (edit)
    region = view.find (TIMESTAMP_CODE, 1)
    if region :
      timestamp = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
      edit = view.begin_edit()
      view.replace(edit, region, timestamp)
      view.end_edit (edit)

class UpdateTimestampListener (sublime_plugin.EventListener):
  """
  On save, search for the MODIFIED line, and replace timestamp with current time
  """
  def on_pre_save (self, view):
    region = view.find (TIMESTAMP_PATTERN, 1)
    if region :
      timestamp = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
      replacement = 'MODIFIED: %s' % timestamp
      edit = view.begin_edit()
      view.replace (edit, region, replacement)
      view.end_edit (edit)